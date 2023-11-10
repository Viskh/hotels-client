import { ChangeThemeButton } from "features/change-theme";
import { Logo } from "shared/ui/logo";
import { MainContainer } from "shared/ui/main-container";

import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <MainContainer>
        <div className={styles.content}>
          <Logo />

          <ChangeThemeButton />
        </div>
      </MainContainer>
    </header>
  );
};
