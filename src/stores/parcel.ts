import type { ParcelType } from "@/assets/game/types/flatDataExcel";
import { cache } from "@/utils/misc";
import { useLocalStorage } from "@vueuse/core";

export const useParcelAmount = cache((type: ParcelType, id: number) => {
  const key = `parcel_${type},${id}`;
  return useLocalStorage(key, 0);
});
