<template>
  <div
    class="bg flex flex-col items-center pt-2 w-[120px] h-44 border rounded border-white"
  >
    <div class="text-center text-black h-8 mx-1" :class="nameSize">
      {{ nameStr }}
    </div>
    <div class="bg-gray-400 h-[1px] w-[80%] mb-2"></div>
    <ParcelCommon
      v-for="(v, i) in gain"
      :key="i"
      :parcel="v.parcel"
      :amount="v.amount"
      :scale="0.33"
      route
    />
    <div v-if="(amount ?? 0) === 0" class="h-4 w-full"></div>
    <div v-else class="bg-blue-950 text-white h-4 text-xs text-center w-full">
      あと{{ amount }}回購入可能
    </div>
    <div class="flex flex-row justify-center items-center m-1">
      <Parcel
        :type="good.ConsumeParcelType[0]"
        :pid="good.ConsumeParcelId[0]"
        layout="icon"
        class="w-8"
      />
      <span class="bg-blue-900 h-4 w-16 text-center text-xs">{{
        good.ConsumeParcelAmount[0]
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import type { GoodsExcel } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/GoodsExcelTable.json";
import { ASSERT_SOLE, ASSERT_SOME } from "../warn/error";
import { type IParcel, getParcel } from "../parcel/parcel";

const props = defineProps({
  name: {
    type: String,
  },
  amount: {
    type: Number,
  },
  goodsId: {
    type: Object as PropType<Number[]>,
    required: true,
  },
});

const goods = props.goodsId
  .map((i) => (DataList as GoodsExcel[]).find((o) => o.Id === i)!)
  .filter((v) => v != null);

const assertSome = inject(ASSERT_SOME)!;
const assertSole = inject(ASSERT_SOLE)!;
const message = `Unexpected shop structure: ${JSON.stringify(goods)}`;

assertSole(goods, 500, message);
const good = goods[0];

const gain: {
  parcel: IParcel;
  amount: number;
}[] = [];
good.ParcelAmount.forEach((amount, i) => {
  const parcel = getParcel(good.ParcelType[i], good.ParcelId[i])!;
  assertSome(parcel);
  gain.push({ parcel, amount });
});

assertSole(good.ConsumeParcelAmount, 500, message);
assertSole(good.ConsumeParcelId, 500, message);
assertSole(good.ConsumeParcelType, 500, message);

const nameStr = props.name ?? gain[0].parcel.name;
const nameLen = nameStr?.length ?? 0;
const nameSize = nameLen > 16 ? "small" : nameLen > 7 ? "median" : "big";
</script>

<style scoped lang="scss">
.bg {
  background-color: rgb(240 240 240);
  background-image: url("@/assets/Atlas/Common/Common_Shop_Deco.png");
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
}
.small {
  font-size: 12px;
  line-height: 14px;
}
.median {
  font-size: 13px;
  line-height: 14px;
}
.big {
  font-size: 14px;
  line-height: 28px;
}
</style>
