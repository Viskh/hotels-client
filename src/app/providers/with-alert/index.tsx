import { ReactNode } from "react";
import { positions, Provider } from "react-alert";

import { Template } from "./template/template";

export const withAlert = (component: () => ReactNode) => () => {
  return (
    <Provider
      template={Template}
      position={positions.TOP_CENTER}
      timeout={5000}
      containerStyle={{ zIndex: 10000 }}
    >
      {component()}
    </Provider>
  );
};
