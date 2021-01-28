import { configureStore } from "@reduxjs/toolkit";
import { pairsReducer } from './features/pairsList'
import { supportReducer } from "./features/support";
import { PAIRS_PREFIX, SUPPORT_PREFIX } from "./constants";

export default configureStore({
  reducer: {
    [PAIRS_PREFIX]: pairsReducer,
    [SUPPORT_PREFIX]: supportReducer
  }
});
