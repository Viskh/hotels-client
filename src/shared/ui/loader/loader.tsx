import { FC } from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

type LoaderProps = {
  className?: string;
  size?: number;
};

export const Loader: FC<LoaderProps> = ({ className, size = 48 }) => {
  return (
    <span
      style={{ width: size, height: size }}
      className={clsx(styles.loader, className)}
    ></span>
  );
};
