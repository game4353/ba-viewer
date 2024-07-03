<template>
  <Scaled class="cursor-pointer" :scale :width="imgW" :height="imgH">
    <v-img class="absolute" :width="imgW" :height="imgH" :src="bg">
      <GameImg class="absolute top-0 left-0 p-1 w-auto" :path />
      <span class="tag">{{ tagStr }}</span>
    </v-img>
  </Scaled>
</template>

<script setup lang="ts">
import { ASSERT_UNREACHABLE } from "@/components/warn/error";
import { Icon } from "../GameImg/icon";
import Scaled from "../misc/Scaled.vue";

const assertUnreachable = inject(ASSERT_UNREACHABLE)!;

const props = defineProps({
  layout: {
    type: String as PropType<"random" | "pack" | "select">,
  },
  scale: Number,
});

const bg = Icon.BgN;

const tagStr = computed(() => {
  if (props.layout === "random") return "ランダム";
  if (props.layout === "pack") return "パック";
  if (props.layout === "select") return "セレクト";
  assertUnreachable(`Layout ${props.layout} is invalid.`);
});

const path = "UIs/01_Common/03_NonEquipment/Item_Icon_Secret_Reward";

const imgW = 256;
const imgH = 210;
</script>

<style scoped lang="scss">
.tag {
  @apply text-black bg-green-200 absolute px-3 left-1 top-0;
  font-size: 42px;
}
.smallText {
  font-size: 36px !important;
  line-height: 48px !important;
}
</style>
