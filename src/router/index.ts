/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalized,
} from "vue-router/auto";
import { setupLayouts } from "virtual:generated-layouts";
import { err } from "@/components/warn/error";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: setupLayouts,
});

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
