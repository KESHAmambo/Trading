import { createAsyncThunk } from "@reduxjs/toolkit";
import { SUPPORT_PREFIX } from "../../constants";
import { createApiURL } from "../../../netconfig";

export const fetchSupportEmail = createAsyncThunk(
  SUPPORT_PREFIX + '/fetchSupportEmail',
  () => {
    return fetch(createApiURL('/support'))
      .then((response) => (response.json()))
      .then((json) => (json.email as string))
  }
)
