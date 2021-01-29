import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApiURL } from "../../../netconfig";
import { PROFILE_PREFIX } from "../../constants";
import { IProfile } from "./types";
import { fetchJSON } from "../../../utilites/utilites";

export const fetchProfile = createAsyncThunk(
  PROFILE_PREFIX + '/fetchProfile',
  () => {
    return fetchJSON(createApiURL('/profile'))
      .then((json) => json.profile as IProfile)
  }
)
