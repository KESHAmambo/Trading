import { configureStore } from "@reduxjs/toolkit";

import pairsReducer from '../features/main_screen/PairsList/pairsListSlice'

export default configureStore({
  reducer: {
    pairs: pairsReducer
  }
});
