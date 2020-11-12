import { configureStore } from "@reduxjs/toolkit";

import pairsReducer from '../features/home_screen/PairsList/pairsListSlice'

export default configureStore({
  reducer: {
    pairs: pairsReducer
  }
});
