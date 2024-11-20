import { ref, watchEffect, toValue, type MaybeRefOrGetter } from "vue";

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
      .catch((err) => (error.value = err));
  };

  watchEffect(() => {
    fetchData();
  });

  return { data, error };
}
