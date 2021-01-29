import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { PROFILE_PREFIX } from "../../constants";
import { IProfileState } from "./types";
import { addAsyncThunkRefreshingReducers } from "../../../utilites/utilites";
import { fetchProfile } from "./thunks";

const slice = createSlice<IProfileState, SliceCaseReducers<IProfileState>>({
  name: PROFILE_PREFIX,
  initialState: {
    profile: {
      avatar: '',
      personalData: {
        name: {
          firstName: undefined,
          lastName: undefined
        },
        dateOfBirth: undefined
      },
      wallets: []
    },
    isRefreshing: false
  },
  reducers: {},
  extraReducers: (builder) => {
    addAsyncThunkRefreshingReducers<IProfileState>(
      builder,
      fetchProfile,
      (state, action) => {
        state.profile = action.payload
      }
    )
  }
})

export const profileReducer = slice.reducer
