import { options, Options } from "preact";

export const subscribeOptionHook = <K extends keyof Options>(
  name: K,
  listener: Options[K] & {}
): void => {
  const prevListener = options[name];

  options[name] = (...args: any[]): any => {
    let res = (listener as any)(...args);
    res = res ?? (prevListener as any)?.(...args);

    return res;
  };
};
