import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { ISupportState } from "../pairsList/types";
import { SUPPORT_PREFIX } from "../../constants";
import { fetchSupportEmail } from "./thunks";

const slice = createSlice<ISupportState, SliceCaseReducers<ISupportState>>({
  name: SUPPORT_PREFIX,
  initialState: {
    email: '',
    isRefreshing: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchSupportEmail.pending,
        state => {
          state.isRefreshing = true;
        }
      )
      .addCase(
        fetchSupportEmail.fulfilled,
        (state, action) => {
          state.email = action.payload;
          state.isRefreshing = false;
        }
      )
      .addCase(
        fetchSupportEmail.rejected,
        (state, action) => {
          console.log('fetch rejected: ' + action);
          state.isRefreshing = false;
        }
      )
  }
})

export const supportReducer = slice.reducer;
