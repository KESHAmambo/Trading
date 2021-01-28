import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApiURL } from "../../../netconfig";
import { ICurrencyPair } from "../../../features/home_screen/CurrencyPair/types";
import { PAIRS_PREFIX } from "../../constants";

export const fetchCurrencyPairs = createAsyncThunk(
  PAIRS_PREFIX + '/fetchCurrencyPairs',
  () => {
    return fetch(createApiURL('/currencies'))
      .then((response) => (response.json()))
      .then((json) => (json.currencyPairs as ICurrencyPair[]))
  }
)
