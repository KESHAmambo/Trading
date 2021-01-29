import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { TECHNICAL_INFO_PREFIX } from "../../constants";
import { fetchTechnicalInfo } from "./thunks";
import { ITechnicalInfoState } from "./types";
import { addAsyncThunkRefreshingReducers } from "../../../utilites/utilites";

const slice = createSlice<ITechnicalInfoState, SliceCaseReducers<ITechnicalInfoState>>({
  name: TECHNICAL_INFO_PREFIX,
  initialState: {
    technicalInfo: {
      supportEmail: '',
      paymentFeeInPercent: 0
    },
    isRefreshing: false
  },
  reducers: {},
  extraReducers: (builder) => {
    addAsyncThunkRefreshingReducers<ITechnicalInfoState>(
      builder,
      fetchTechnicalInfo,
      (state, action) => {
        state.technicalInfo = action.payload;
      }
    )
  }
})

export const technicalInfoReducer = slice.reducer;
