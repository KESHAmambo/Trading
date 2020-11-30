import { configureStore } from "@reduxjs/toolkit";

import { pairsReducer } from './features/pairsList'

export default configureStore({
  reducer: {
    pairs: pairsReducer
  }
});
