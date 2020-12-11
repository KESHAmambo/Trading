import { IPairsState, ISupportState } from "./features/pairsList/types";

export interface IRootState {
  pairs: IPairsState,
  support: ISupportState
}

