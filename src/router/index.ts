/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { err } from "@/components/warn/error";
import { setupLayouts } from "virtual:generated-layouts";
import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalized,
} from "vue-router";
import { handleHotUpdate, routes } from "vue-router/auto-routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
});

// This will update routes at runtime without reloading the page
if (import.meta.hot) {
  handleHotUpdate(router);
}

// Define a function to run on route change
function onRouteChange(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _to: RouteLocationNormalized,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _from: RouteLocationNormalized,
) {
  err.error = false;
}

// Use the afterEach navigation guard
router.afterEach(onRouteChange);
export default router;
