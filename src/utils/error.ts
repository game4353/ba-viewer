export class FetchDataErr extends Error {
  info: {
    cause: Error;
    title: string;
  } = {
    title: "",
    cause: null as any,
  };

  private constructor(...args: any) {
    super(...args);
    this.name = "FetchDataErr";
  }

  static from(title: string, error: unknown) {
    let cause: Error;
    if (error instanceof Error) cause = error;
    else cause = new Error(`${error}`);
    const e = new FetchDataErr(`Failed to fetch '${title}'.`, { cause });
    e.info = { cause, title };
    return e;
  }
}

export class KeyNotFoundErr extends Error {
  info: {
    key?: any;
    keyName: string;
    title: string;
  } = {
    keyName: "key",
    title: "map",
  };

  constructor(...args: any) {
    super(...args);
    this.name = "KeyNotFoundErr";
  }

  static from(key: any, keyName = "key", title = "map") {
    const e = new KeyNotFoundErr();
    e.info = { key, keyName, title };
    return e;
  }
}

export class TimeoutErr extends Error {
  info: {
    timeSec: number;
    title: string;
  } = {
    timeSec: 0,
    title: "",
  };

  constructor(...args: any) {
    super(...args);
    this.name = "TimeoutErr";
  }

  static from(title: string, timeSec: number) {
    const e = new TimeoutErr();
    e.info = { timeSec, title };
    return e;
  }
}
