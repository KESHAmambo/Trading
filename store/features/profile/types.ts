import { IWallet } from "../../../features/profile_screen/Wallet/types";

export interface IProfileState {
  profile: IProfile,
  isRefreshing: boolean
}

export interface IProfileWidget {
  avatar: string,
  personalData: IPersonalData,
}

export interface IProfile extends IProfileWidget {
  wallets: IWallet[]
}

export interface IPersonalData {
  name: IProfileName,
  dateOfBirth: string | undefined
}

export interface IProfileName {
  firstName: string | undefined,
  lastName: string | undefined
}
