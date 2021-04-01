import { configureStore } from "@reduxjs/toolkit";
import { pairsReducer } from './features/pairsList'
import { technicalInfoReducer } from "./features/technicalInfo";
import { NEWS_PREFIX, PAIRS_PREFIX, PROFILE_PREFIX, TECHNICAL_INFO_PREFIX } from "./constants";
import { profileReducer } from "./features/profile";
import { newsReducer } from "./features/news";

export default configureStore({
  reducer: {
    [PAIRS_PREFIX]: pairsReducer,
    [TECHNICAL_INFO_PREFIX]: technicalInfoReducer,
    [PROFILE_PREFIX]: profileReducer,
    [NEWS_PREFIX]: newsReducer
  }
});
