import {
  FetchDataErr,
  KeyNotFoundErr,
  NotImplementErr,
  TimeoutErr,
} from "@/utils/error";

export const err = reactive({
  error: false,
  code: 0,
  display: "",
});

function setError(code: number, display?: string) {
  err.error = true;
  err.code = code;
  err.display = display ?? "";
  console.error(new Error(display));
}

function injectErrRead() {
  return err;
}
export const ERR_READ: InjectionKey<typeof injectErrRead> = Symbol("ERR_READ");
export function provideErrRead() {
  provide(ERR_READ, injectErrRead);
}

function injectErr404(url: string) {
  setError(404, `The requested URL '${url}' is invalid.`);
}
export const ERR_404: InjectionKey<typeof injectErr404> = Symbol("ERR_404");
export function provideErr404() {
  provide(ERR_404, injectErr404);
}

function injectErr501(input: string) {
  setError(501, `${input} is not implemented yet.`);
}
/** `const error501 = inject(ERR_501)!;`
 *
 *  `error501(input);`
 *
 *  The message will be `${input} is not implemented yet.`
 */
export const ERR_501: InjectionKey<typeof injectErr501> = Symbol("ERR_501");
export function provideErr501() {
  provide(ERR_501, injectErr501);
}

function injectErrHandle(err: Error) {
  if (err instanceof TimeoutErr) {
  } else if (err instanceof KeyNotFoundErr) {
    const { keyName, key, title } = err.info;
    setError(406, `${keyName} '${key}' does not exist in ${title}.`);
  } else if (err instanceof NotImplementErr) {
    const { title } = err.info;
    setError(501, `'${title}' is not implemented yet.`);
  } else if (err instanceof FetchDataErr) {
    const { cause, title } = err.info;
    setError(500, `Failed to fetch '${title}': ${cause.message}`);
  } else setError(500, err.message);
  return undefined;
}
/**`const errHandle = inject(ERR_HANDLE)!;` */
export const ERR_HANDLE: InjectionKey<typeof injectErrHandle> =
  Symbol("ERR_HANDLE");
export function provideErrHandle() {
  provide(ERR_HANDLE, injectErrHandle);
}
