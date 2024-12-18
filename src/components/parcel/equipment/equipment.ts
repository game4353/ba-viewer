import type { MapResult } from "@/utils/data/excel";
import {
  useExcelEquipment,
  useExcelEquipmentLevel,
} from "@/utils/data/excel/parcel";
import { useExcelRecipeIngredient } from "@/utils/data/excel/recipe";
import { Local } from "@/utils/i18n/localize";
import { cache, noDefault, sum } from "@/utils/misc";
import { Ok, Result, asResult } from "@/utils/result/result";
import type { ReadonlyDeep } from "type-fest";
import {
  EquipmentCategory,
  ParcelType,
  type EquipmentExcel,
  type EquipmentLevelExcel,
} from "~game/types/flatDataExcel";
import type { IParcel } from "../parcel";
import { recipeToIngredient } from "../recipe/recipe";

export class CEquipment implements IParcel {
  type = ParcelType.Equipment as const;
  private data = reactive({
    lv: 1,
  });

  constructor(public obj: ReadonlyDeep<EquipmentExcel>) {}
  get desc() {
    return Local.useLocalizeEtc(this.obj.LocalizeEtcId, true);
  }
  get iconPath() {
    return this.obj.Icon;
  }
  get id() {
    return this.obj.Id;
  }
  get name() {
    return Local.useLocalizeEtc(this.obj.LocalizeEtcId);
  }
  get rarity() {
    return this.obj.Rarity;
  }
  get recipe() {
    const rid = this.obj.RecipeId;
    return asResult(
      useExcelRecipeIngredient().value.andThen((map) =>
        rid === 0 ? Ok(null) : map.getResult(rid),
      ),
    );
  }
  get level() {
    return this.data.lv;
  }
  set level(val: number) {
    this.data.lv = val;
  }
  get tier() {
    return this.obj.TierInit;
  }
  getExp(targetLevel: number) {
    return asResult(
      useExcelEquipmentLevel().value.andThen((map) => {
        const current = map
          .getResult(this.level)
          .map((o) => o.TotalExp[this.obj.TierInit]);
        const target = map
          .getResult(targetLevel)
          .map((o) => o.TotalExp[this.obj.TierInit]);
        return Result.all([current, target]).map(([c, t]) =>
          Math.max(0, t - c),
        );
      }),
    );
  }
  getNextTier() {
    const id = this.obj.NextTierEquipment;
    return asResult(id === 0 ? Ok(null) : useEquipment(id));
  }
  getIngredients(targetTier: number) {
    return equipmentRecipes(this.id, targetTier).value.andThen(
      recipeToIngredient,
    );
  }
}

export function useEquipment(id: number) {
  return asResult(
    useExcelEquipment()
      .value.andThen((map) => map.getResult(id))
      .map((c) => new CEquipment(c)),
  );
}

export function useEquipmentFromEnum(cat: EquipmentCategory, tier: number) {
  switch (cat) {
    case EquipmentCategory.Unable:
    case EquipmentCategory.Exp:
      return useEquipment(0);
    case EquipmentCategory.Bag:
      return useEquipment(4000 + tier - 1);
    case EquipmentCategory.Hat:
      return useEquipment(1000 + tier - 1);
    case EquipmentCategory.Gloves:
      return useEquipment(2000 + tier - 1);
    case EquipmentCategory.Shoes:
      return useEquipment(3000 + tier - 1);
    case EquipmentCategory.Badge:
      return useEquipment(5000 + tier - 1);
    case EquipmentCategory.Hairpin:
      return useEquipment(6000 + tier - 1);
    case EquipmentCategory.Charm:
      return useEquipment(7000 + tier - 1);
    case EquipmentCategory.Watch:
      return useEquipment(8000 + tier - 1);
    case EquipmentCategory.Necklace:
      return useEquipment(9000 + tier - 1);
    case EquipmentCategory.WeaponExpGrowthA:
    case EquipmentCategory.WeaponExpGrowthB:
    case EquipmentCategory.WeaponExpGrowthC:
    case EquipmentCategory.WeaponExpGrowthZ:
      return useEquipment(0);
    default:
      return noDefault(cat);
  }
}

const equipmentRecipes = cache((base: number, tier: number) =>
  computed(() => {
    const arr = [];
    const res1 = useExcelEquipment().value;
    if (res1.isErr()) return res1;
    const map = res1.unwrap();

    let res2 = map.getResult(base);
    while (true) {
      if (res2.isErr()) return res2;
      const excel = res2.unwrap();
      if (excel.TierInit >= tier) break;
      arr.push(excel.RecipeId);
      res2 = map.getResult(excel.NextTierEquipment);
    }
    return Ok(arr);
  }),
);

export function equipmentExp(
  cat: EquipmentCategory,
  tier: number,
  lv: number,
  targetTier: number,
  targetLv: number,
  unit: number,
) {
  return useExcelEquipmentLevel().value.andThen((map) =>
    equipmentExp2(map, cat, tier, lv, targetTier, targetLv, unit),
  );
}

const equipmentExp2 = cache(
  (
    map: MapResult<number, ReadonlyDeep<EquipmentLevelExcel>>,
    cat: EquipmentCategory,
    tier: number,
    lv: number,
    targetTier: number,
    targetLv: number,
    unit: number,
  ) => {
    if (tier > targetTier) return Ok(0);
    if (tier < targetTier) {
      // TODO: fix hard-coded 65
      const arr: Result<number, Error>[] = [
        equipmentExp2(map, cat, tier, lv, tier, 65, unit),
      ];
      while (++tier < targetTier) {
        arr.push(equipmentExp2(map, cat, tier, 1, tier, 65, unit));
      }
      arr.push(equipmentExp2(map, cat, tier, 1, tier, targetLv, unit));
      return Result.all(arr).map(sum);
    }
    if ((lv || 1) >= targetLv) return Ok(0);
    return Result.all([map.getResult(lv), map.getResult(targetLv)]).map(
      ([n, g]) =>
        Math.ceil(
          (g.TotalExp[tier - 1] -
            n.TotalExp[tier - 1] +
            n.TierLevelExp[tier - 1] -
            g.TierLevelExp[tier - 1]) /
            unit,
        ),
    );
  },
);
