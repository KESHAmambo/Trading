import { IRootState } from "../../types";

export const currencyPairsListSelector = (state: IRootState) => state.pairs.pairs;
export const isCurrencyPairsListRefreshingSelector = (state: IRootState) => state.pairs.isRefreshing;
