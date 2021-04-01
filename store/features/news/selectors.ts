import { IRootState } from "../../types";

export const newsBodiesSelector = (state: IRootState) => state.news.newsBodies;
export const isNewsRefreshingSelector = (state: IRootState) => state.news.isRefreshing;
