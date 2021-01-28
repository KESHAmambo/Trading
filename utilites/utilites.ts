import { ColorValue, ProcessedColorValue } from "react-native-charts-wrapper/node_modules/@types/react-native";
import { processColor } from "react-native";

export const DAY_DURATION_IN_MILLISECONDS = 1000 * 3600 * 24;

//@ts-ignore
export const processColorWrapper: (color?: number | ColorValue) => ProcessedColorValue | null | undefined = (color) => {
  //@ts-ignore
  return processColor(color)
}

export const createMailUrl = (email = '', subject = '', body = '') => {
  return `mailto:${email}?subject=${subject}&body=${body}`
}
