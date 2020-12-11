import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { IPairsState } from "./types";
import { fetchCurrencyPairs } from "./thunks";
import { PAIRS_PREFIX } from "../../constants";

const slice = createSlice<IPairsState, SliceCaseReducers<IPairsState>>({
  name: PAIRS_PREFIX,
  initialState: {
    pairs: [],
    isRefreshing: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCurrencyPairs.pending,
        state => {
          state.isRefreshing = true;
        }
      )
      .addCase(
        fetchCurrencyPairs.fulfilled,
        (state, action) => {
          state.pairs = action.payload;
          state.isRefreshing = false;
        }
      )
      .addCase(
        fetchCurrencyPairs.rejected,
        (state, action) => {
          console.log('fetch rejected: ' + action);
          state.isRefreshing = false;
        }
      )
  }
})

export const pairsReducer = slice.reducer;
