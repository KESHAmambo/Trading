export interface ICurrencyPair {
  id: string,
  icon1: string,
  icon2: string,
  currencyCode1: string,
  currencyCode2: string,
  currencyName1: string,
  currencyName2: string,
  chartData: Array<number>,
  ratio: number,
  change: number,
  sign: '+' | '-'
}
