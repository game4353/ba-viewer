import { Spine } from "@esotericsoftware/spine-pixi";
import { clamp } from "@vueuse/core";
import { Howl } from "howler";
import * as PIXI from "pixi.js";

/** Scale a spine.
 * Input 0 to use the original scale.
 * Omit `scaleY` to use `scaleX`.
 */
function scaleSpine(spine: Spine, scaleX: number, scaleY?: number) {
  if (scaleX === 0) scaleX = spine.scale.x;
  if (scaleY === 0) scaleY = spine.scale.y;
  spine.scale.set(scaleX, scaleY ?? scaleX);
}

export class Live2DViewer {
  app: PIXI.Application;
  char?: Spine;
  spines: Spine[] = [];
  private _loopAnimation: boolean = false;

  private howl?: Howl;
  private _volumeBG = 0.5;
  // private _muteBG = true;
  private _volumeTalk = 0.5;
  private _muteTalk = true;

  constructor(width = 800, height = 600) {
    this.app = new PIXI.Application({ width, height, backgroundAlpha: 0 });
  }

  get animations() {
    return this.char?.state.data.skeletonData.animations?.map((a) => a.name);
  }

  mute() {
    // this._muteBG = true;
    this._muteTalk = true;
    this.howl?.mute(true);
  }

  unmute() {
    // this._muteBG = false;
    this._muteTalk = false;
    this.howl?.mute(false);
  }

  get volumeBG() {
    return this._volumeBG;
  }

  setVolumeBG(volume: number) {
    this._volumeBG = clamp(volume, 0, 1);
  }

  get volumeTalk() {
    return this._volumeTalk;
  }

  setVolumeTalk(volume: number) {
    this._volumeTalk = clamp(volume, 0, 1);
    this.howl?.volume(this.volumeTalk);
  }

  appendTo(div: HTMLDivElement) {
    // @ts-ignore
    div.appendChild(this.app.view);
    return this;
  }

  resizeCanvas(width: number, height: number) {
    this.app.renderer.resize(width, height);
    return this;
  }

  /**
   * Load a Live2D Model.
   * This method also clears the stage.
   * @param {string} src - Path to .skel file.
   * @example
   * const canvas = document.querySelector("canvas")!;
   * const l2d = new Live2DViewer(canvas);
   * l2d.loadModel("data/Android/airi_home/Airi_home.skel");
   */
  async loadModel(...srcs: string[]) {
    // Clear stage
    this.clearStage();

    const char = await this.addSpine(srcs[0], "char");
    this.char = char;
    for (let i = 1; i < srcs.length; i++) {
      await this.addSpine(srcs[i], String(i), 0);
    }

    char.eventMode = "static";
    char.on("pointerdown", onDragStart, char);

    const stage = this.app.stage;
    stage.eventMode = "static";
    stage.hitArea = this.app.screen;
    stage.on("pointerup", onDragEnd);
    stage.on("pointerupoutside", onDragEnd);

    const onDragMove = (event: PIXI.FederatedPointerEvent) => {
      this.spines.forEach((spine) =>
        spine.parent.toLocal(event.global, undefined, spine.position),
      );
    };

    function onDragStart(event: PIXI.FederatedPointerEvent) {
      const p = char.toLocal(event.global);
      char.pivot = p;
      char.parent.toLocal(event.global, undefined, char.position);
      stage.on("pointermove", onDragMove);
    }

    function onDragEnd() {
      stage.off("pointermove", onDragMove);
    }

    /*
    // Play default animation
    if (char.state.hasAnimation("Start_Idle_01")) {
      this.playAnimation("Start_Idle_01");
    } else {
      const animation = char.state.data.skeletonData.animations[0];
      this.playAnimation(animation.name);
    }
    */

    char.state.addListener({
      event: async (entry, event) => {
        if (event.data.name !== "Talk") return;

        this.howl?.stop();

        const fileName = event.stringValue + ".ogg";
        const characterId = fileName.split("_")[0];
        const src = `/assets/Audio/VOC_JP/JP_${characterId}/${fileName}`;

        this.howl = new Howl({
          src,
          mute: this._muteTalk,
          volume: this._volumeTalk,
        });

        if (this.howl.state() === "loaded") {
          this.howl.play();
        } else {
          char.state.timeScale = 0;
          this.howl.on("load", () => {
            this.howl!.play();
            char.state.timeScale = 1;
          });
          this.howl.on("loaderror", () => {
            console.error("Failed to load voice line.");
            char.state.timeScale = 1;
          });
        }
      },
    });
  }

  /**
   * Clear a PIXI stage.
   */
  clearStage() {
    this.app.stage = new PIXI.Container();
    if (this.howl !== undefined) this.howl.stop();
  }

  /**
   * Add a spine to the stage.
   * @param {string} src - Path to .skel file
   * @param {string} name - A unique name
   * @param {number} index - Index to insert at
   * @returns {Promise<Spine>}
   * @example
   * const live2d = new Live2DViewer(...);
   * live2d.addSpine("data/akari_home/akari_bg.skel", "bg", 0);
   */
  async addSpine(src: string, name: string, index?: number): Promise<Spine> {
    src = src.replace(".skel", "");
    PIXI.Assets.add({ alias: `${src}-skel`, src: src + ".skel" });
    PIXI.Assets.add({ alias: `${src}-atlas`, src: src + ".atlas" });
    await PIXI.Assets.load([`${src}-skel`, `${src}-atlas`]);
    const spine = Spine.from(`${src}-skel`, `${src}-atlas`);
    this.spines.push(spine);

    console.log(spine);
    // const data = await PIXI.Assets.load(src);
    // const spine = new Spine(data.spineData);
    spine.name = name;

    if (index == null) this.app.stage.addChild(spine);
    else this.app.stage.addChildAt(spine, index);
    return spine;
  }

  /** Scale entire loaded assets.
   * Input 0 to use the original scale.
   * Omit `scaleY` to use `scaleX`.
   */
  scaleAssets(scaleX: number, scaleY?: number) {
    const children = this.app.stage.children;
    children.forEach((child) => {
      if (!(child instanceof Spine)) return;
      scaleSpine(child, scaleX, scaleY);
    });
    return this;
  }

  /** Resize entire loaded assets.
   * Input 0 to use the original size.
   * Input undefined to retain the ratio.
   */
  resizeAssets(width?: number, height?: number) {
    this.app.stage.children.forEach((child) => {
      if (!(child instanceof Spine)) return;
      const scaleX = (width ?? NaN) / child.width;
      const scaleY = (height ?? NaN) / child.height;
      scaleSpine(child, scaleX || scaleY, scaleY || scaleX);
    });
    return this;
  }

  /** Fill scale entire loaded assets. */
  fillScale() {
    this.app.stage.children.forEach((child) => {
      if (!(child instanceof Spine)) return;
      const scaleX = this.app.renderer.width / child.width;
      const scaleY = this.app.renderer.height / child.height;
      scaleSpine(child, Math.max(scaleX, scaleY));
    });
    return this;
  }

  /** Fit scale entire loaded assets. */
  fitScale() {
    this.app.stage.children.forEach((child) => {
      if (!(child instanceof Spine)) return;
      const scaleX = this.app.renderer.width / child.width;
      const scaleY = this.app.renderer.height / child.height;
      scaleSpine(child, Math.min(scaleX, scaleY));
    });
    return this;
  }

  /** Move offset of entire loaded assets. */
  move(x?: number, y?: number) {
    const children = this.app.stage.children;
    children.forEach((child) => {
      child.x = x ?? child.x;
      child.y = y ?? child.y;
    });
    return this;
  }

  /**
   * Center entire loaded assets.
   * @returns {[number, number]} - [x, y]
   */
  center(): [number, number] {
    const children = this.app.stage.children;

    let [x, y] = [0, 0];
    children.forEach((child) => {
      if (!(child instanceof Spine)) return;
      child.x = this.app.renderer.width / 2;
      if (child.height * child.scale.y < this.app.renderer.height) {
        child.y =
          this.app.renderer.height - child.height * child.scale.y * 1.25;
      } else {
        child.y = this.app.renderer.height;
      }
      [x, y] = [child.x, child.y];
    });
    return [x, y];
  }

  playAnimation(name: string, options: { onComplete?: () => void } = {}) {
    if (!this.char) return;
    this.howl?.stop();

    this.spines.forEach((spine) => this.playAnimationSingle(spine, name));

    this.char.state.addListener({ complete: options.onComplete });
  }

  private playAnimationSingle(spine: Spine, name: string) {
    spine.state.setEmptyAnimations(0);
    if (this.hasAnimation(spine, name + "_A")) {
      spine.state.setAnimation(2, name + "_A", this.loopAnimation);
    }
    if (this.hasAnimation(spine, name + "_M")) {
      spine.state.setAnimation(1, name + "_M", this.loopAnimation);
    }
    if (this.hasAnimation(spine, name)) {
      spine.state.setAnimation(0, name, this.loopAnimation);
    }
  }

  hasAnimation(spine: Spine, name: string) {
    return (
      spine.state.data.skeletonData.animations
        ?.map((a) => a.name)
        .includes(name) ?? false
    );
  }

  /** "xx_M" and "xx_A" are merged to "xx" */
  getAnimations(): string[] {
    return [...new Set(this.animations?.map((s) => s.replace(/_[MA]$/, "")))];
  }

  get loopAnimation(): boolean {
    return this._loopAnimation;
  }

  set loopAnimation(v: boolean) {
    if (!this.char) return;

    if (this.howl !== undefined) this.howl.stop();

    this._loopAnimation = v;
    this.char.state.tracks[0]!.loop = v;
  }
}

/* TODO
It's pretty hard to fulfill everything (pat, bubbles, flash, etc.)
, so this is not going to be a feature of the website.

*/
