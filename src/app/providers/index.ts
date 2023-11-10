import compose from "compose-function";

import { withLang } from "./with-lang";
import { withRouter } from "./with-router";
import { withStore } from "./with-store";

export const withProvider = compose(withLang, withRouter, withStore);
