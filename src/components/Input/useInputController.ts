import { useImperativeHandle, useMemo, useRef, useState } from "react";

export const useInputController = ({ ref, error, iconColor, color }) => {
  /**
   * States
   */

  const [text, setText] = useState<string>("");

  /**
   * Refs
   */

  const internalRef = useRef<any>();

  /**
   * ImperativeHandles
   */

  useImperativeHandle(
    ref,
    () => ({
      value: text,
      focus: () => internalRef.current?.focus?.(),
      blur: () => internalRef.current?.blur?.(),
      setValue: (value: string) => setText(value),
    }),
    [text]
  );

  /**
   * Memos
   */

  const selectedColorForActiveColorIcon = useMemo(() => {
    if (error) {
      return "#D93936";
    }
    if (iconColor) {
      return iconColor;
    }
    return color;
  }, [color, error, iconColor]);

  return { text, selectedColorForActiveColorIcon, internalRef, setText };
};
