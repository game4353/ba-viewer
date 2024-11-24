<template>
  <Parcel
    v-if="good"
    :type="good.ConsumeParcelType[0]"
    :pid="good.ConsumeParcelId[0]"
    layout="icon"
  />
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { fail } from "@/utils/misc";
import { useExcelGoods } from "@/utils/data/excel/shop";

const props = defineProps({
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
