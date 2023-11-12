import { Header } from "widgets/header";
import { Hotels } from "widgets/hotels";

import styles from "./styles.module.scss";

const MainPage = () => {
  return (
    <main className={styles.mainPage}>
      <Header />

      <Hotels />
    </main>
  );
};

export default MainPage;
