import type { IFilterable } from "@/components/filter/class";

export enum TagState {
  Show,
  Hide,
  All,
}

export class CTag<T> {
  public get bg(): string | undefined {
    return this._bg;
  }
  public set bg(value: string) {
    this._bg = value;
  }
  public get icon(): string | undefined {
    return this._icon;
  }
  public set icon(value: string) {
    this._icon = value;
  }
  state = TagState.All;
  parents = new Set<CTagGroup<T>>();

  constructor(
    public value: T,
    public display: string,
    private _icon?: string,
    private _bg?: string,
  ) {}

  get isHide() {
    return this.state === TagState.Hide;
  }

  /** return whether show/hide is toggled after setting */
  setState(state: TagState) {
    const h = this.isHide;
    this.state = state;
    return h !== this.isHide;
  }
}

export class CTagGroup<T> {
  picked = new Set<number>();
  showCount = new Map<IFilterable, number>();
  taggedItems: Map<CTag<T>, Set<IFilterable>>;
  show = new Set<IFilterable>();

  constructor(
    public title: string,
    public tags: readonly CTag<T>[],
  ) {
    this.taggedItems = new Map();
    tags.forEach((tag) => {
      this.taggedItems.set(tag, new Set());
      tag.parents.add(this);
    });
  }

  getTag(type: T) {
    return this.tags.find((v) => v.value === type);
  }
  addItem(item: IFilterable, tagValue: T) {
    const tag = this.getTag(tagValue);
    if (tag == null) return;
    const set = this.taggedItems.get(tag)!;
    if (set.has(item)) return;
    set.add(item);
    if (!this.showCount.has(item)) this.showCount.set(item, 0);
    if (!tag.isHide) this.increaseShowCount(item);
    if (this.showCount.get(item) === 0) item.hideBy.add(this);
  }
  deleteItem(item: IFilterable, tagValue: T) {
    const tag = this.getTag(tagValue);
    if (tag == null) return;
    const set = this.taggedItems.get(tag)!;
    if (!set.has(item)) return;
    set.delete(item);
    if (!tag.isHide) this.decreaseShowCount(item);
  }

  increaseShowCount(item: IFilterable) {
    const sc = this.showCount.get(item) ?? 0;
    this.showCount.set(item, sc + 1);
    this.show.add(item);
    item.hideBy.delete(this);
  }
  decreaseShowCount(item: IFilterable) {
    const sc = this.showCount.get(item) ?? 0;
    this.showCount.set(item, sc - 1);
    if (sc === 1) {
      this.show.delete(item);
      item.hideBy.add(this);
    }
  }

  /** vuetify will simply push the modified idx in the end,
   * or splice the modified idx
   */
  setPicked(arr: number[]) {
    if (arr.length === 0) {
      this.tags.forEach((tag) => this.on(tag, TagState.All));
      this.picked.clear();
    } else {
      const set = new Set(arr);
      this.tags.forEach((tag, i) => {
        if (set.has(i)) this.on(tag);
        else this.off(tag);
      });
      this.picked = set;
    }
  }
  on(tag: CTag<T>, state = TagState.Show) {
    if (!tag.setState(state)) return;
    this.taggedItems.get(tag)?.forEach((item) => {
      this.increaseShowCount(item);
    });
  }
  off(tag: CTag<T>) {
    if (!tag.setState(TagState.Hide)) return;
    this.taggedItems.get(tag)?.forEach((item) => {
      this.decreaseShowCount(item);
    });
  }
}
