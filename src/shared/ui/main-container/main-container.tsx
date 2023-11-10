import { type FC, type HTMLAttributes, type ReactNode } from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

type MainContainerProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export const MainContainer: FC<MainContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <main className={clsx(styles.mainContainer, className)} {...props}>
      {children}
    </main>
  );
};
