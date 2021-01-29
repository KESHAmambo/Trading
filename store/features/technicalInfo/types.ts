export interface ITechnicalInfoState {
  technicalInfo: ITechnicalInfo,
  isRefreshing: boolean
}

export interface ITechnicalInfo {
  supportEmail: string,
  paymentFeeInPercent: number
}
