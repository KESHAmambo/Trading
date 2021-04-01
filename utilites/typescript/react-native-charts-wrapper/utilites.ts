import { ColorValue, ProcessedColorValue } from "react-native-charts-wrapper/node_modules/@types/react-native";
import { processColor } from "react-native";

/**
 * Эта обертка позволяет игнорировать ворнинг тайпскрипта, вызванный кривой реализацией библиотеки.
 * Типы ColorValue и ProcessedColorValue содержат в себе тип unique symbol. Из-за того, что
 * они продублированы в библиотеке react-native-charts-wrapper, а processColor в react-native,
 * происходит несоответствие типов unique symbol, т.к. они находятся в разных модулях.
 */
//@ts-ignore
export const processColorWrapper: (color?: number | ColorValue) => ProcessedColorValue | null | undefined = (color) => {
  //@ts-ignore
  return processColor(color)
}
