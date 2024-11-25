enum TagState {
  Show,
  Hide,
  All,
}

export interface IFilterable {
  tags: CTag<Object>[];
  hideCount: number;
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
  instances: IFilterable[] = [];
  state = TagState.All;

  constructor(
    public value: T,
    public display: string,
    private _icon?: string,
    private _bg?: string,
  ) {}

  get isHide() {
    return this.state === TagState.Hide;
  }

  add(i: IFilterable) {
    this.instances.push(i);
  }
  setState(state: TagState) {
    if (state === this.state) return;
    if (state === TagState.Hide) {
      this.instances.forEach((v) => v.hideCount++);
    } else if (this.state === TagState.Hide) {
      this.instances.forEach((v) => v.hideCount--);
    }
    this.state = state;
  }
}

export class CTagGroup {
  static title = "";
  static picked: number[];
  static tags: CTag<Object>[];
  static setPicked(arr: number[]) {
    if (arr.length === this.picked.length + 1) {
      const add = arr.at(-1)!;
      if (arr.length === 1) {
        this.tags.forEach((v) => v.setState(TagState.Hide));
      }
      this.tags[add].setState(TagState.Show);
    } else if (arr.length === 0) {
      this.tags.forEach((v) => v.setState(TagState.All));
    } else if (arr.length === this.picked.length - 1) {
      const remove = this.picked.find((v, i) => v !== arr[i])!;
      this.tags[remove].setState(TagState.Hide);
    } else {
      console.error("TODO not supported");
    }
    this.picked = arr;
  }
  static getTag<T>(type: T) {
    return this.tags.find((v) => v.value === type);
  }
}

export function compare(a?: number | string, b?: number | string) {
  if (a === b) return 0;
  if (b == null) return -1;
  if (a == null) return 1;
  if (typeof a === "string") return a.localeCompare(String(b));
  return a - Number(b);
}
