// https://stackoverflow.com/questions/73795753/how-to-import-custom-svg-icons-in-vuetify-3

import { h } from "vue";
import type { IconSet, IconProps } from "vuetify";
import sushi from "./sushi.vue";
import evilTower from "./evil-tower.vue";
import cap from "./billed-cap.vue";

const customSvgNameToComponent: any = {
  sushi,
  evilTower,
  cap,
};

const customSVGs: IconSet = {
  // @ts-ignore because I don't know how it works
  component: (props: IconProps) => h(customSvgNameToComponent[props.icon]),
};

export { customSVGs /* aliases */ };
