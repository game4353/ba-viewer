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
  value: T;
  display: string;
  icon?: string;
  instances: IFilterable[] = [];
  state = TagState.All;
  constructor(value: T, display: string, icon?: string) {
    this.value = value;
    this.display = display;
    this.icon = icon;
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
}
