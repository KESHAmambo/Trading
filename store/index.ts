import { configureStore } from "@reduxjs/toolkit";
import { pairsReducer } from './features/pairsList'
import { supportReducer } from "./features/support";
import { PAIRS_PREFIX, PROFILE_PREFIX, SUPPORT_PREFIX } from "./constants";
import { profileReducer } from "./features/profile";

export default configureStore({
  reducer: {
    [PAIRS_PREFIX]: pairsReducer,
    [SUPPORT_PREFIX]: supportReducer,
    [PROFILE_PREFIX]: profileReducer
  }
});
