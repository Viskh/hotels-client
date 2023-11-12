import { forwardRef, type ReactNode } from "react";
import clsx from "clsx";

import { type MergeElementProps } from "shared/types";

import styles from "./styles.module.scss";

export type FamilyType = "medium" | "semibold" | "regular";
export type AlignType = "left" | "center" | "right";

export type TextProps = MergeElementProps<"span"> & {
  children: ReactNode;
  align?: AlignType;
  size?: number;
  lineHeight?: number | string;
  bold?: boolean;
  family?: FamilyType;
  color?: "primary" | "secondary";
  userSelect?: boolean;
  marginTop?: number;
  tooltipClassName?: string;
};

export const Text = forwardRef<HTMLSpanElement, TextProps>(
  (
    {
      children,
      align,
      bold = false,
      color = "primary",
      family = "regular",
      lineHeight = 16,
      marginTop = 0,
      userSelect = true,
      size = 14,
      className,
      style,
      ...otherProps
    },
    ref,
  ) => {
    return (
      <span
        ref={ref}
        className={clsx(
          styles.text,
          styles[`textColors-${color}`],
          {
            [styles.bold]: bold,
            [styles.disable_select]: !userSelect,
            [styles[`family_${family}`]]: Boolean(family),
            [styles[`align_${align ?? ""}`]]: Boolean(align),
          },
          className,
        )}
        style={{
          lineHeight: `${lineHeight}px`,
          marginTop,
          fontSize: size,
          ...style,
        }}
        {...otherProps}
      >
        {children}
      </span>
    );
  },
);
