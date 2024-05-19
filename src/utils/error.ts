export const err = reactive({
  error: false,
  message: "",
});

export function setError(message: string) {
  err.error = true;
  err.message = message;
  console.error(message, new Error().stack);
}

export const INJECT_ERR: InjectionKey<typeof setError> = Symbol("inject err");
