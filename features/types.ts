export type IRootStackParamList = {
  Home: undefined;
  PairDetails: {
    pairId: string
  };
}

export type IMaxMinFunction = (...values: number[]) => number;
