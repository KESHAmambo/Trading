import { createAsyncThunk, createSlice, SliceCaseReducers } from "@reduxjs/toolkit";

import { ICurrencyPair, IPairsState, IRootState } from "../../../redux_store/types";

const myNet = require('../../../netconfig')

export const fetchCurrencyPairs = createAsyncThunk(
  'pairs/fetchCurrencyPairs',
  () => {
    return fetch('http://' + myNet.apiPath + '/currencies')
      .then((response) => (response.json()))
      .then((json) => (json.currencyPairs as ICurrencyPair[]))
  });

export const slice = createSlice<IPairsState, SliceCaseReducers<IPairsState>>({
  name: 'pairs',
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

export default slice.reducer;

export const selectCurrencyPairs = (state: IRootState) => state.pairs.pairs;
export const selectStatus = (state: IRootState) => state.pairs.isRefreshing;
