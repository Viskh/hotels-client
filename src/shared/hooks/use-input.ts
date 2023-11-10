import { useEffect, useState } from "react";

import { useBind } from "./use-bind";
import { getHasInputValueChanged } from "../lib";

export const useInput = (inputValue: string) => {
  const [localValue, setLocalValue] = useState(inputValue);

  const { value, onChange } = useBind(localValue, setLocalValue);

  useEffect(() => {
    if (getHasInputValueChanged(localValue, inputValue)) {
      onChange(inputValue || "");
    }
  }, [inputValue]);

  return {
    localValue: value,
    onChange,
  };
};
