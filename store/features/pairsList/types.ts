import { ICurrencyPair } from "../../../features/home_screen/CurrencyPair/types";

export interface IPairsState {
  pairs: Array<ICurrencyPair>,
  isRefreshing: boolean
}
