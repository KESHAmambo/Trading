import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApiURL } from "../../../netconfig";
import { PROFILE_PREFIX } from "../../constants";
import { IProfile } from "./types";

export const fetchProfile = createAsyncThunk(
  PROFILE_PREFIX + '/fetchProfile',
  () => {
    return fetch(createApiURL('/profile'))
      .then((response) => response.json())
      .then((json) => json.profile as IProfile)
  }
)
