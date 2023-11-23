import { tw } from "@twind/core";
import { subscribeOptionHook } from "./utilts.js";
export * from "@twind/core";

subscribeOptionHook("vnode", (vnode) => {
  const props = vnode.props;

  if ("className" in props) {
    props.className = tw("" + props.className);
  }
});
