import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";

import { ICurrencyPair, IPairsState, IRootState } from "../../../redux_store/types";

const myNet = require('../../../netconfig')

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>

type PendingAction = ReturnType<GenericAsyncThunk['pending']>
// type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>

export const fetchCurrencyPairs = createAsyncThunk(
  'pairs/fetchCurrencyPairs',
  () => (
    fetch('https://' + myNet.apiPath + '/currencies')
      .then((response) => response.json())
      .then((json) => json.currencyPairs)
  ));

export const slice = createSlice({
  name: 'pairs',
  initialState: {
    pairs: [] as ICurrencyPair[],
    isRefreshing: false
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action): action is PendingAction => action.type.endsWith('/pending'),
        (state: IPairsState) => {
          state.isRefreshing = true;
        }
      )
      .addMatcher(
        (action): action is FulfilledAction => action.type.endsWith('/fulfilled'),
        (state: IPairsState, action) => {
          state.pairs = action.payload as ICurrencyPair[];
          state.isRefreshing = false;
        }
      )
  }
})

//export const { getCurPairs } = slice.actions;

export default slice.reducer;

export const selectCurrencyPairs = (state: IRootState) => state.pairs.pairs;
export const selectStatus = (state: IRootState) => state.pairs.isRefreshing;
