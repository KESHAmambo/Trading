import { createAsyncThunk } from "@reduxjs/toolkit";
import { TECHNICAL_INFO_PREFIX } from "../../constants";
import { createApiURL } from "../../../netconfig";
import { fetchJSON } from "../../../utilites/utilites";
import { ITechnicalInfo } from "./types";

export const fetchTechnicalInfo = createAsyncThunk(
  TECHNICAL_INFO_PREFIX + '/fetchTechnicalInfo',
  () => {
    return fetchJSON(createApiURL('/technicalInfo'))
      .then((json) => (json.technicalInfo as ITechnicalInfo))
  }
)
