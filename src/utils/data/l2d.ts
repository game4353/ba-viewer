import { Err, Ok } from "~/utils/result";
import { useFetch } from "./index";

export function useSpineLobbyPath() {
  const url = computed(() => `/data/lobby.json`);
  const { data, error } = useFetch<Partial<Record<number, string[]>>>(url);
  const state = computed(() => {
    if (data.value == null && error.value == null) return null;
    if (data.value != null) return Ok(data.value);
    return Err(error.value as Error);
  });
  return readonly(state);
}

export function useSpineCharacterPath() {
  const url = computed(() => `/data/l2d.json`);
  const { data, error } = useFetch<Partial<Record<number, string[]>>>(url);
  const state = computed(() => {
    if (data.value == null && error.value == null) return null;
    if (data.value != null) return Ok(data.value);
    return Err(error.value as Error);
  });
  return readonly(state);
}
