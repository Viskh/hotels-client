import { ReactComponent as CloseIcon } from "../../images/icons/delete.svg";
import { IconButton, IconButtonProps } from "../icon-button";

import styles from "./styles.module.scss";

export type CloseButtonType = Omit<IconButtonProps, "Icon">;

export const CloseButton = ({ className, ...otherProps }: CloseButtonType) => {
  return (
    <IconButton
      Icon={CloseIcon}
      className={`${className ?? ""} ${styles.icon}`}
      {...otherProps}
    />
  );
};
