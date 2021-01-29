import { IPairsState} from "./features/pairsList/types";
import { ITechnicalInfoState } from "./features/technicalInfo/types";
import { IProfileState } from "./features/profile/types";

export interface IRootState {
  pairs: IPairsState,
  technicalInfo: ITechnicalInfoState,
  profile: IProfileState
}

