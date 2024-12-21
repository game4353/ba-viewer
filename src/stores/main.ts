import { cache } from "@/utils/misc";
import { Err, type Result } from "@/utils/result/result";
import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { z } from "zod";

export abstract class IOData<T extends z.AnyZodObject> {
  protected abstract title: string;
  protected abstract schema: T;
  protected abstract defaultObj: z.infer<T>;

  protected toFullKey(key: string) {
    return `[${this.title}]${key}`;
  }

  protected getAllFullKey() {
    const arr = [];
    for (let i = 0; i < localStorage.length; i++) {
      const fullKey = localStorage.key(i);
      if (fullKey?.startsWith(`[${this.title}]`)) arr.push(fullKey);
    }
    return arr;
  }

  abstract use(...args: any): ReturnType<ReturnType<typeof this.useWithKey>>;

  protected useWithKey = cache((key: string) => {
    const fullKey = this.toFullKey(key);
    const dft = this.defaultObj;
    const store = defineStore(fullKey, {
      state: () =>
        useLocalStorage(fullKey, structuredClone(dft), {
          mergeDefaults: true,
        }),
      actions: {
        update(data: z.infer<T>) {
          this.$state = data;
        },
        reset() {
          this.$state = structuredClone(dft);
        },
      },
    });
    return store;
  });

  /** gather all localStorage items with the key prefix in a map */
  protected readAll() {
    const map = new Map<string, z.infer<T>>();
    this.getAllFullKey().forEach((fullKey) => {
      const key = fullKey.slice(this.title.length + 2);
      const val = JSON.parse(localStorage.getItem(fullKey) ?? "");
      const obj = this.schema.safeParse(val);
      if (!obj.success) {
        console.error(obj.error);
        return;
      }
      map.set(key, obj.data);
    });
    return map;
  }

  /** remove all localStorage items with the key prefix
   * TODO: it requires detach of pinia I guess
   */
  protected removeAll() {
    this.getAllFullKey().forEach((fullKey) => {
      const key = fullKey.slice(this.title.length + 2);
      this.useWithKey(key)().reset();
      // localStorage.removeItem(k)
    });
  }

  /** overwrite all localStorage items with the key prefix in the obj */
  protected writeAll(obj: Partial<Record<string, z.infer<T>>>) {
    Object.entries(obj).forEach(([k, v]) => {
      if (v == null) return;
      const store = this.useWithKey(k);
      store().update(v);
    });
  }

  protected invalidVersion(version: number) {
    return Err(new Error(`Invalid data version: '${version}'.`));
  }

  abstract export(version: number): Result<string, Error>;

  protected abstract check(
    version: number,
    data: string,
  ): Result<Record<string, Partial<z.infer<T>>>, Error>;

  /** import will only overwrite data.
   *  To delete entries not present, use deleteAll first. <- TODO
   */
  import(version: number, data: string) {
    return this.check(version, data).map((obj) => ({
      perform: () => {
        return this.writeAll(obj);
      },
    }));
  }
}
