import { useAction } from "shared/hooks";

import { actions } from "../slice";

export const useSetSearch = () => useAction(actions.setSearch);

export const useSetPage = () => useAction(actions.setPageTotal);

export const useReset = () => useAction(actions.resetState);
