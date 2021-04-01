import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { NEWS_PREFIX } from "../../constants";
import { addAsyncThunkRefreshingReducers } from "../../../utilites/utilites";
import { INewsState } from "./types";
import { fetchNews } from "./thunks";

const slice = createSlice<INewsState, SliceCaseReducers<INewsState>>({
  name: NEWS_PREFIX,
  initialState: {
    newsBodies: [],
    isRefreshing: false
  },
  reducers: {},
  extraReducers: (builder) => {
    addAsyncThunkRefreshingReducers<INewsState>(
      builder,
      fetchNews,
      (state, action) => {
        const {
          id,
          newsBody
        } = action.payload
        state.newsBodies[id] = newsBody;
      }
    )
  }
})

export const newsReducer = slice.reducer;
