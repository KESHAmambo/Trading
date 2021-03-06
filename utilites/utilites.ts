import { ActionReducerMapBuilder, AsyncThunk, Draft } from "@reduxjs/toolkit";
import { IsRefreshingState, NoInfer } from "./types";

export const createMailUrl = (email = '', subject = '', body = '') => {
  return `mailto:${email}?subject=${subject}&body=${body}`
}

export const fetchJSON = (url: string) => {
  return fetch(url)
    .then((response) => (response.json()))
}

export const addAsyncThunkRefreshingReducers = <T extends IsRefreshingState>(
  builder: ActionReducerMapBuilder<NoInfer<T>>,
  thunk: AsyncThunk<any, any, any>,
  onFulfilled: (state: Draft<T>, action: { payload: any, type: string }) => void
) => {
  builder
    .addCase(
      thunk.pending,
      state => {
        state.isRefreshing = true;
      }
    )
    .addCase(
      thunk.fulfilled,
      (state, action) => {
        onFulfilled(state, action);
        state.isRefreshing = false;
      }
    )
    .addCase(
      thunk.rejected,
      (state, action) => {
        console.log('fetch rejected: ' + action.type);
        state.isRefreshing = false;
      }
    )
}

export const cutString = (str: string | number, maxLength: number) => {
  const numChars = maxLength > 3 ? Math.floor(maxLength - 2) : 1;
  const text = String(str);
  return text.length > maxLength ? text.slice(0, numChars) + '...' : text;
}
