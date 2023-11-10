import { useEffect } from "react";

import { useAction, useAppSelector } from "shared/hooks";
import { getLocalStorage, setLocalStorage } from "shared/lib";
import { type Theme } from "shared/ui/theme-switcher";

import { STORAGE_KEY_THEME } from "./config";
import { selectTheme } from "./selectors";
import { actions } from "./slice";

export const useSetTheme = () => useAction(actions.setTheme);

export const useResetTheme = () => useAction(actions.resetTheme);

export const useSelectTheme = () => useAppSelector(selectTheme);

export const useTheme = () => {
  const storageTheme = getLocalStorage<Theme>(STORAGE_KEY_THEME);
  const theme = useSelectTheme();

  const setTheme = useSetTheme();

  const changeTheme = (themeValue: Theme) => {
    setTheme(themeValue);
    setLocalStorage(STORAGE_KEY_THEME, themeValue);
  };

  useEffect(() => {
    if (!storageTheme) {
      setLocalStorage(STORAGE_KEY_THEME, theme);
    }
  }, []);

  return {
    theme,
    changeTheme,
  };
};
