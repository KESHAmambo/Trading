import { IRootState } from "../../types";

export const technicalInfoSelector = (state: IRootState) => state.technicalInfo.technicalInfo;
export const supportEmailSelector = (state: IRootState) => state.technicalInfo.technicalInfo.supportEmail;
export const paymentFeeInPercentSelector = (state: IRootState) => state.technicalInfo.technicalInfo.paymentFeeInPercent;
export const isTechnicalInfoRefreshingSelector = (state: IRootState) => state.technicalInfo.isRefreshing;
