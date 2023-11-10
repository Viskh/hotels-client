import clsx from "clsx";

import { themeModel } from "features/change-theme";

import { withProvider } from "./providers";
import { Routing } from "./routes";

import "./styles/index.scss";

const App = () => {
  const { theme } = themeModel.hooks.useTheme();

  return (
    <div className={clsx("app", theme)}>
      <Routing />
    </div>
  );
};

export default withProvider(() => <App />);
