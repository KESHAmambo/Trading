import { NewsItemType } from "../../../enum/news_type/NewsItemType";

export interface INewsState {
  newsBodies: INewsBody[],
  isRefreshing: boolean
}

export type INewsBody = INewsItem[];

export interface INewsItem {
  type: NewsItemType,
  body: string
}
