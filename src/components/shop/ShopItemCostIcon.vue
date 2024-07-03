<template>
  <Parcel
    :type="good.ConsumeParcelType[0]"
    :pid="good.ConsumeParcelId[0]"
    layout="icon"
  />
</template>

<script setup lang="ts">
import { PropType } from "vue";
import type { GoodsExcel } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/GoodsExcelTable.json";
import { ASSERT_SOLE } from "../warn/error";

const props = defineProps({
  goodsId: {
    type: Object as PropType<Number[]>,
    required: true,
  },
});

const goods = props.goodsId
  .map((i) => (DataList as GoodsExcel[]).find((o) => o.Id === i)!)
  .filter((v) => v != null);

const assertSole = inject(ASSERT_SOLE)!;
const message = `Unexpected shop structure: ${JSON.stringify(goods)}`;

assertSole(goods, 500, message);
const good = goods[0];
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
