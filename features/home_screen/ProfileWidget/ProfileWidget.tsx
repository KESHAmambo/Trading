import { Pressable, Text, View } from "react-native";
import React, { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import { profileSelector } from "../../../store/features/profile/selectors";
import { Avatar } from "../../elements/Avatar/Avatar";
import { IProfile } from "../../../store/features/profile/types";
import { Color } from "../../../enum/styles/Color";
import { cutString } from "../../../utilites/utilites";
import { WINDOW_WIDTH } from "../../../utilites/constants";

interface IProps {
  onPress: () => void
}

const useDisplayedWallet = (profile: IProfile, displayedWalletIndex: number) => {
  return useMemo(() => {
    if (profile.wallets.length === 0) {
      return ({
        code: '',
        volume: ''
      })
    } else {
      return profile.wallets[displayedWalletIndex]
    }
  }, [profile, displayedWalletIndex]);
}

const useScrollWallets = (walletsLength: number, setDisplayedWalletIndex: Dispatch<SetStateAction<number>>) => {
  useEffect(() => {
    const scrollWallets = setInterval(() => {
      setDisplayedWalletIndex((index) => {
        if (index < walletsLength - 1) {
          return index + 1
        } else {
          return 0
        }
      })
    }, 2000);

    if (walletsLength === 0) {
      clearInterval(scrollWallets)
    }

    return () => {
      clearInterval(scrollWallets)
    };
  }, [walletsLength, setDisplayedWalletIndex]);
}

const FuncComponent = (props: IProps) => {

  const {
    onPress
  } = props;

  const [displayedWalletIndex, setDisplayedWalletIndex] = useState<number>(0);

  const profile = useSelector(profileSelector);

  const walletsLength = useMemo<number>(() => profile.wallets.length, [profile]);

  const {
    code,
    volume
  } = useDisplayedWallet(profile, displayedWalletIndex);

  useScrollWallets(walletsLength, setDisplayedWalletIndex);

  return (
    <Pressable
      onPress={onPress}
      android_ripple={{color: Color.DARK_VIOLET, radius: 0.15*WINDOW_WIDTH}}>
      <View style={styles.mainContainer}>
        <View style={styles.walletContainer}>
          <Text style={styles.wallet}>
            {cutString(code, 7)}
          </Text>

          <Text style={styles.wallet}>
            {cutString(volume, 7)}
          </Text>
        </View>

        <Avatar
          style={styles.avatar}
          uri={profile.avatar}
        />
      </View>
    </Pressable>
  )
}

export const ProfileWidget = React.memo(FuncComponent)
