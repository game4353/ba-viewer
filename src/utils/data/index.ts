import { type MaybeRefOrGetter } from "vue";
import { FetchDataErr, TimeoutErr } from "../result/error";
import { Err, Ok, type Result } from "../result/result";

export function useFetch<T>(
  url: MaybeRefOrGetter<string> | globalThis.ComputedRef<string>,
) {
  const data = ref<T | null>(null);
  const error = ref<Error | null>(null);

  const fetchData = () => {
    data.value = null;
    error.value = null;

    fetch(toValue(url))
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch(
        (err) =>
          (error.value = err instanceof Error ? err : new Error(`${err}`)),
      );
  };

  watchEffect(() => {
    fetchData();
  });

  return { data, error };
}

const cache = new Map<string, any>();

export function useFetchResult<T>(url: string) {
  if (cache.has(url))
    return cache.get(url) as ComputedRef<Result<T, TimeoutErr | FetchDataErr>>;
  const { data, error } = useFetch(url);
  const state = computed(() => {
    if (data.value == null && error.value == null)
      return Err(TimeoutErr.from(url, 0));
    if (data.value != null) return Ok(data.value as T);
    return Err(FetchDataErr.from(url, error.value));
  });
  cache.set(url, state);
  return state;
}
