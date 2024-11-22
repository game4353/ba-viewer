<template>
  <div
    class="bg flex flex-col items-center pt-2 w-[120px] h-44 border rounded border-white"
    v-if="good"
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
import { useExcelGoods } from "@/utils/data/excel/shop";
import { fail } from "@/utils/misc";
import { PropType } from "vue";
import { getParcel } from "../parcel/parcel";

const props = defineProps({
  name: {
    type: String,
  },
  amount: {
    type: Number,
  },
  goodsId: {
    type: Object as PropType<number[] | Readonly<number[]>>,
    required: true,
  },
});

const table = useExcelGoods();

const good = computed(() => {
  // TODO: deal with multiple goods
  const good = table.value?.unwrapOrElse(fail)?.get(props.goodsId[0]);
  if (good == null) return undefined;
  return good;
});

const gain = computed(() =>
  good.value?.ParcelAmount.map((amount, i) => {
    const parcel = getParcel(
      good.value!.ParcelType[i],
      good.value!.ParcelId[i],
    ).value?.unwrapOrElse(fail)!;
    return { parcel, amount };
  }),
);

const nameStr = computed(
  () =>
    props.name ?? gain.value?.[0].parcel?.name.value?.unwrapOrElse(fail) ?? "",
);
const nameLen = computed(() => nameStr.value?.length ?? 0);
const nameSize = computed(() =>
  nameLen.value > 16 ? "small" : nameLen.value > 7 ? "median" : "big",
);
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
