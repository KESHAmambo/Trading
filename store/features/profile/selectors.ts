import { IRootState } from "../../types";

export const profileSelector = (state: IRootState) => state.profile.profile;
export const isProfileRefreshingSelector = (state: IRootState) => state.profile.isRefreshing;
