import { Dimensions, StatusBar } from "react-native";

export const DAY_DURATION_IN_MILLISECONDS = 1000 * 3600 * 24;
export const WINDOW_WIDTH = Dimensions.get("window").width;
export const WINDOW_HEIGHT = Dimensions.get("window").height;
export const WINDOW_HEIGHT_WITHOUT_BARS = WINDOW_HEIGHT - (StatusBar.currentHeight !== undefined ? StatusBar.currentHeight : 0);
