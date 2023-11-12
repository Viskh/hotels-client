import { ComponentPropsWithRef, ElementType, forwardRef } from "react";
import clsx from "clsx";

import styles from "./index.module.scss";

export type IconButtonProps = ComponentPropsWithRef<"button"> & {
  Icon: ElementType;
  size?: number;
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ Icon, className, size = 36, ...otherProps }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(styles.button, className)}
        style={{ width: size, height: size }}
        {...otherProps}
      >
        <Icon />
      </button>
    );
  },
);
