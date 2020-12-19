import { ColorValue, ProcessedColorValue } from "react-native-charts-wrapper/node_modules/@types/react-native";
import { processColor } from "react-native";
import { ActionReducerMapBuilder, AsyncThunk, Draft } from "@reduxjs/toolkit";
import { IsRefreshingState, NoInfer } from "./types";

export const DAY_DURATION_IN_MILLISECONDS = 1000 * 3600 * 24;

//@ts-ignore
export const processColorWrapper: (color?: number | ColorValue) => ProcessedColorValue | null | undefined = (color) => {
  //@ts-ignore
  return processColor(color)
}

export const createMailUrl = (email = '', subject = '', body = '') => {
  return `mailto:${email}?subject=${subject}&body=${body}`
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
        console.log('fetch rejected: ' + action);
        state.isRefreshing = false;
      }
    )
}
