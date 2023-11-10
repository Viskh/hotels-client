import { type FC } from "react";
import clsx from "clsx";

import { type Theme } from "./types";

import styles from "./styles.module.scss";

type ThemeSwitcherProps = {
  switchClass?: string;
  theme: Theme;
  changeTheme: (theme: Theme) => void;
};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({
  switchClass,
  theme,
  changeTheme,
}) => {
  const checked = theme === "dark";

  const onChange = () => {
    changeTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <label className={clsx(styles.switch, switchClass)}>
      <input type="checkbox" checked={checked} onChange={onChange} />

      <span className={styles.slider}></span>
    </label>
  );
};
