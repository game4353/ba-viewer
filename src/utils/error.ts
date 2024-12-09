export class FetchDataErr extends Error {
  name = "FetchDataErr" as const;
  info: {
    cause: Error;
    title: string;
  } = {
    title: "",
    cause: null as any,
  };

  private constructor(...args: any) {
    super(...args);
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
  name = "KeyNotFoundErr" as const;
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
  }

  static from(key: any, keyName = "key", title = "map") {
    const e = new KeyNotFoundErr();
    e.info = { key, keyName, title };
    return e;
  }
}

export class ManyResultErr extends Error {
  name = "ManyResultErr" as const;
  constructor(...args: any) {
    super(...args);
  }
}

export class NoResultErr extends Error {
  name = "NoResultErr" as const;
  constructor(...args: any) {
    super(...args);
  }
}

export class TimeoutErr extends Error {
  name = "TimeoutErr" as const;
  info: {
    timeSec: number;
    title: string;
  } = {
    timeSec: 0,
    title: "",
  };

  constructor(...args: any) {
    super(...args);
  }

  static from(title: string, timeSec: number) {
    const e = new TimeoutErr();
    e.info = { timeSec, title };
    return e;
  }
}
