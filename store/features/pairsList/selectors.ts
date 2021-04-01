import { IRootState } from "../../types";

export const currencyPairsListSelector = (state: IRootState) => state.pairs.pairs;
export const currencyPairByIdSelector = (pairId: string) => {
  return (state: IRootState) => {
    return state.pairs.pairs.find((pair) => pair.id === pairId)
  }
}
export const isCurrencyPairsListRefreshingSelector = (state: IRootState) => state.pairs.isRefreshing;
