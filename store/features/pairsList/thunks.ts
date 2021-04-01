import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApiURL } from "../../../netconfig";
import { ICurrencyPair } from "../../../features/home_screen/CurrencyPair/types";
import { PAIRS_PREFIX } from "../../constants";
import { fetchJSON } from "../../../utilites/utilites";

export const fetchCurrencyPairs = createAsyncThunk(
  PAIRS_PREFIX + '/fetchCurrencyPairs',
  () => {
    return fetchJSON(createApiURL('/currencies'))
      .then((json) => (json.currencyPairs as ICurrencyPair[]))
  }
)
