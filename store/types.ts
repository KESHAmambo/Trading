import { IPairsState} from "./features/pairsList/types";
import { ISupportState } from "./features/support/types";
import { IProfileState } from "./features/profile/types";

export interface IRootState {
  pairs: IPairsState,
  support: ISupportState,
  profile: IProfileState
}

