import { Pressable, Text, View } from "react-native";
import React, { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import { profileSelector } from "../../../store/features/profile/selectors";
import { Avatar } from "../../elements/Avatar/Avatar";
import { IProfile } from "../../../store/features/profile/types";
import { Color } from "../../../enum/styles/Color";

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

  const displayedWalletVolume = code + ' ' + volume;

  return (
    <Pressable
      onPress={onPress}
      android_ripple={{color: Color.BRIGHT_VIOLET}}>
      <View style={styles.mainContainer}>
        <Text style={styles.wallet}>
          {displayedWalletVolume.length > 12 ? displayedWalletVolume.slice(0, 11) + '...' : displayedWalletVolume}
        </Text>
        <Avatar
          style={styles.avatar}
          uri={profile.avatar}/>
      </View>
    </Pressable>
  )
}

export const ProfileWidget = React.memo(FuncComponent)
