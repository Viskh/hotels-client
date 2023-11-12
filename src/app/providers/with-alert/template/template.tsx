import React, { FC, ReactNode } from "react";
import { AlertTemplateProps, AlertType } from "react-alert";

import { ReactComponent as ErrorIcon } from "shared/images/icons/error.svg";
import { ReactComponent as SuccessIcon } from "shared/images/icons/success.svg";
import { CloseButton } from "shared/ui/close-button";
import { Text } from "shared/ui/text";

import styles from "./styles.module.scss";

const iconByType: Record<AlertType, ReactNode> = {
  success: <SuccessIcon />,
  info: <ErrorIcon />,
  error: <ErrorIcon />,
};

export type TemplateProps = AlertTemplateProps;

export const Template: FC<TemplateProps> = ({
  style,
  options,
  message,
  close,
}) => {
  return (
    <div className={styles.container} style={style}>
      <div className={styles.iconContainer}>
        {iconByType[options.type as AlertType]}
      </div>

      <div className={styles.messageContainer}>
        <Text>{message}</Text>
      </div>

      <CloseButton onClick={close} />
    </div>
  );
};
