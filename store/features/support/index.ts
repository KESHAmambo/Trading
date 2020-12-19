import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { SUPPORT_PREFIX } from "../../constants";
import { fetchSupportEmail } from "./thunks";
import { ISupportState } from "./types";
import { addAsyncThunkRefreshingReducers } from "../../../utilites/utilites";

const slice = createSlice<ISupportState, SliceCaseReducers<ISupportState>>({
  name: SUPPORT_PREFIX,
  initialState: {
    email: '',
    isRefreshing: false
  },
  reducers: {},
  extraReducers: (builder) => {
    addAsyncThunkRefreshingReducers<ISupportState>(
      builder,
      fetchSupportEmail,
      (state, action) => {
        state.email = action.payload;
      }
    )
  }
})

export const supportReducer = slice.reducer;
