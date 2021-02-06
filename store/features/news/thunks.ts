import { createAsyncThunk } from "@reduxjs/toolkit";
import { NEWS_PREFIX } from "../../constants";
import { fetchJSON } from "../../../utilites/utilites";
import { createApiURL } from "../../../netconfig"
import { INewsItem } from "./types";

export const fetchNews = createAsyncThunk(
  NEWS_PREFIX + '/fetchNews',
  (id: number) => {
    return fetchJSON(createApiURL('/news/' + id))
      .then((json) => json.news as INewsItem[])
  }
)
