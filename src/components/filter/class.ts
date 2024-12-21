import type { Rarity } from "@/assets/game/types/flatDataExcel";
import type { CTag, CTagGroup } from "@/components/filter/tag";
import { AParcel } from "@/components/parcel/class";

export interface IFilterable {
  hideBy: Set<CTagGroup<any>>;
  hidden$: boolean;
  order$: number;
}

export abstract class AFilterableParcel<
  T extends
    | { Id: number; LocalizeEtcId: number; Icon?: string; Rarity?: Rarity }
    | { ID: number; LocalizeEtcId: number; Icon?: string; Rarity?: Rarity },
> extends AParcel<T> {
  private order = ref(0);
  get order$() {
    return this.order.value;
  }
  set order$(value: number) {
    this.order.value = value;
  }

  abstract searching$: string;
  abstract search: string[];
  get hiddenBySearch$() {
    if (this.searching$ === "") return false;
    return this.search.every((text) => !text.includes(this.searching$));
  }

  hideBy = reactive(new Set<CTagGroup<any>>());
  get hidden$() {
    return this.hideBy.size > 0 || this.hiddenBySearch$;
  }
  addStaticTag(tag?: CTag<any>) {
    tag?.parents.forEach((group) => group.addItem(this, tag.value));
  }
  addDynamicTag<T>(fn: () => T, tag: (type: T) => CTag<T> | undefined) {
    watch(
      fn,
      (newVal, oldVal) => {
        const oldTag = oldVal == null ? undefined : tag(oldVal);
        const newTag = tag(newVal);
        oldTag?.parents.forEach((group) =>
          group.deleteItem(this, oldTag!.value),
        );
        newTag?.parents.forEach((group) => group.addItem(this, newTag!.value));
      },
      { immediate: true },
    );
  }
}
