import { Screens } from "../enum/screens/screens";

export type IRootStackParamList = {
  [Screens.HOME]: undefined;
  [Screens.PAIR_DETAILS]: {
    pairId: string
  };
  [Screens.SUPPORT]: undefined;
  [Screens.PROFILE]: undefined
}

export type IMaxMinFunction = (...values: number[]) => number;
