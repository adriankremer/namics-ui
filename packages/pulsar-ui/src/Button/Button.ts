import { createComponent } from "../utils/createComponent";
import { useProps } from "../System/useProps";
import { useOptions } from "../System/useOptions";
import { useBox } from "../Box";
import { usePaper } from "../Paper";
import { useTabbable } from "../Tabbable";

export type ButtonOptions = {};

export type ButtonProps = React.ButtonHTMLAttributes<any>;

export function useButton({ ...options }, htmlProps: ButtonProps) {
  options = useOptions("useButton", options, htmlProps);
  htmlProps = useProps("useButton", options, htmlProps);

  htmlProps = {
    ...htmlProps,
    ...{
      role: "button",
      type: "button"
    }
  };

  htmlProps = useBox(options, htmlProps);
  htmlProps = usePaper(options, htmlProps);
  htmlProps = useTabbable(options, htmlProps);
  return htmlProps;
}

export const Button = createComponent({
  as: "button",
  useHook: useButton
});
