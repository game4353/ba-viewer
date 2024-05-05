/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas); // Include needed solid icons
library.add(far); // Include needed regular icons

// Plugins
import vuetify from "./vuetify";
import pinia from "../stores";
import router from "../router";

// Types
import type { App } from "vue";

export function registerPlugins(app: App) {
  app
    .component("font-awesome-icon", FontAwesomeIcon) // Register component globally
    .use(vuetify)
    .use(router)
    .use(pinia);
}
