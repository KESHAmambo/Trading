import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { IPairsState } from "./types";
import { fetchCurrencyPairs } from "./thunks";
import { PAIRS_PREFIX } from "../../constants";
import { addAsyncThunkRefreshingReducers } from "../../../utilites/utilites";

const slice = createSlice<IPairsState, SliceCaseReducers<IPairsState>>({
  name: PAIRS_PREFIX,
  initialState: {
    pairs: [],
    isRefreshing: false
  },
  reducers: {},
  extraReducers: (builder) => {
    addAsyncThunkRefreshingReducers<IPairsState>(
      builder,
      fetchCurrencyPairs,
      (state, action) => {
        state.pairs = action.payload;
      }
    )
  }
})

export const pairsReducer = slice.reducer;
