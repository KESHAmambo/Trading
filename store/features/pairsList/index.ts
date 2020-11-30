import { createAsyncThunk, createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { IPairsState } from "./types";
import { createApiURL } from "../../../netconfig";
import { ICurrencyPair } from "../../../features/home_screen/CurrencyPair/types";

export const pairsPrefix = 'pairs';

export const fetchCurrencyPairs = createAsyncThunk(
  pairsPrefix + '/fetchCurrencyPairs',
  () => {
    return fetch(createApiURL('/currencies'))
      .then((response) => (response.json()))
      .then((json) => (json.currencyPairs as ICurrencyPair[]))
  });

const slice = createSlice<IPairsState, SliceCaseReducers<IPairsState>>({
  name: pairsPrefix,
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
