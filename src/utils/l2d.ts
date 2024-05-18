import "pixi-spine";

import * as PIXI from "pixi.js";
import { Spine } from "pixi-spine";
import { Howl } from "howler";

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

  playVoice: boolean = false;
  voiceVolume: number = 1;
  howl?: Howl;
  baseURL: string =
    "https://prod-clientpatch.bluearchiveyostar.com/r67_utfwo6vcvx7rhl017phc";
  private _loopAnimation: boolean = false;

  constructor(width = 800, height = 600) {
    this.app = new PIXI.Application({ width, height, backgroundAlpha: 0 });
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
  async loadModel(src: string) {
    // Clear stage
    this.clearStage();

    const char = await this.addSpine(src, "char");
    this.char = char;

    char.eventMode = "static";
    char.on("pointerdown", onDragStart, char);

    const stage = this.app.stage;
    stage.eventMode = "static";
    stage.hitArea = this.app.screen;
    stage.on("pointerup", onDragEnd);
    stage.on("pointerupoutside", onDragEnd);

    function onDragMove(event: PIXI.FederatedPointerEvent) {
      char.parent.toLocal(event.global, undefined, char.position);
    }

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

    char.state.addListener({
      event: async (entry, event) => {
        if (!this.playVoice) return;
        if (event.data.name !== "Talk") return;

        if (this.howl !== undefined) this.howl.stop();

        const data = event as any as EventData;

        let fileName = data.stringValue + ".ogg";
        let characterId = fileName.split("_")[0];

        let src = `${this.baseURL}/MediaResources/Audio/VOC_JP/JP_${characterId}/${fileName}`;

        // Try to fetch first, if not found, try title case characterId (error case: hinata_home, should be Hinata in fileName)
        // Also disable cors
        const res = await fetch(src, { mode: "no-cors" });
        if (!res.ok) {
          characterId = characterId[0].toUpperCase() + characterId.slice(1);
          fileName = fileName[0].toUpperCase() + fileName.slice(1);
          src = `${this.baseURL}/MediaResources/Audio/VOC_JP/JP_${characterId}/${fileName}`;
        }

        this.howl = new Howl({
          volume: this.voiceVolume,
          src: `${this.baseURL}/MediaResources/Audio/VOC_JP/JP_${characterId}/${fileName}`,
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
    */
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
    const data = await PIXI.Assets.load(src);
    const spine = new Spine(data.spineData);
    spine.name = name;

    if (index !== undefined) {
      this.app.stage.addChildAt(spine, index);
    } else {
      this.app.stage.addChild(spine);
    }
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
      const scaleX = (width ?? NaN) / child.spineData.width;
      const scaleY = (height ?? NaN) / child.spineData.height;
      scaleSpine(child, scaleX || scaleY, scaleY || scaleX);
    });
    return this;
  }

  /** Fill scale entire loaded assets. */
  fillScale() {
    this.app.stage.children.forEach((child) => {
      if (!(child instanceof Spine)) return;
      const scaleX = this.app.renderer.width / child.spineData.width;
      const scaleY = this.app.renderer.height / child.spineData.height;
      scaleSpine(child, Math.max(scaleX, scaleY));
    });
    return this;
  }

  /** Fit scale entire loaded assets. */
  fitScale() {
    this.app.stage.children.forEach((child) => {
      if (!(child instanceof Spine)) return;
      const scaleX = this.app.renderer.width / child.spineData.width;
      const scaleY = this.app.renderer.height / child.spineData.height;
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
      if (child.spineData.height * child.scale.y < this.app.renderer.height) {
        child.y =
          this.app.renderer.height -
          child.spineData.height * child.scale.y * 1.25;
      } else {
        child.y = this.app.renderer.height;
      }
      [x, y] = [child.x, child.y];
    });
    return [x, y];
  }

  /**
   * Play a char animation.
   * @param name
   */
  playAnimation(name: string, options: { onComplete?: () => void } = {}) {
    if (!this.char) return;
    this.howl?.stop();

    // If last animation name is M, play M (mouth/music?) + A (action?)
    if (name.endsWith("_M")) {
      const action = name.slice(0, -2) + "_A";
      if (this.char.state.hasAnimation(action)) {
        this.char.state.setAnimation(2, action, this.loopAnimation);
      }
    } else {
      this.char.state.clearTrack(2);
    }

    // If other than idle, play idle
    if (!name.includes("Idle")) {
      if (this.char.state.hasAnimation("Idle_01")) {
        this.char.state.setAnimation(1, "Idle_01", true);
      }
    } else {
      this.char.state.clearTrack(1);
    }

    this.char.state.setAnimation(0, name, this.loopAnimation);
    this.char.state.addListener({ complete: options.onComplete });
  }

  /**
   * Get an animation.
   * @param name - Animation name
   */
  getAnimation(name: string) {
    if (!this.char) return;

    const animations = this.char.state.data.skeletonData.animations;
    const animation = animations.find((a) => a.name === name);
    return animation;
  }

  /**
   * Get a list of animations.
   * @returns {string[]}
   */
  getAnimations(): string[] {
    if (!this.char) return [];

    const animations = this.char.state.data.skeletonData.animations;
    const names = animations.map((a) => a.name);
    return names;
  }

  get loopAnimation(): boolean {
    return this._loopAnimation;
  }

  set loopAnimation(v: boolean) {
    if (!this.char) return;

    if (this.howl !== undefined) this.howl.stop();

    this._loopAnimation = v;
    this.char.state.tracks[0].loop = v;
  }
}
