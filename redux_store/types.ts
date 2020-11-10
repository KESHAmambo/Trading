export interface ICurrencyPair {
  id: string,
  icon1: string,
  icon2: string,
  title: string,
  currency1: string,
  currency2: string,
  chartData: Array<number>,
  ratio: number,
  change: number,
  sign: string
}

export interface IPairsState {
  pairs: Array<ICurrencyPair>,
  isRefreshing: boolean
}

export interface IRootState {
  pairs: IPairsState
}
