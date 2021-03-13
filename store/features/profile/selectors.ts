import { IRootState } from "../../types";

export const profileSelector = (state: IRootState) => state.profile.profile;
export const walletsSelector = (state: IRootState) => state.profile.profile.wallets;
export const isProfileRefreshingSelector = (state: IRootState) => state.profile.isRefreshing;
