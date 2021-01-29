import { Pressable, Text, View } from "react-native";
import React, { useCallback, useMemo, useState } from "react";
import { styles } from "./styles";
import { PersonalDataWidget } from "./PersonalDataWidget/PersonalDataWidget";
import { useSelector } from "react-redux";
import { profileSelector } from "../../store/features/profile/selectors";
import { WalletsList } from "./WalletsList/WalletsList";
import { IWallet } from "./Wallet/types";
import { SortingParam } from "../../enum/wallets_sorting/SortingParam";
import { Sorted } from "../../enum/wallets_sorting/Sorted";
import { IProfile } from "../../store/features/profile/types";
import { SortingIconInactive, SortingIconMaxToMin, SortingIconMinToMax } from "../elements/SortingIcons/SortingIcons";

const getSortingFunction = (param: SortingParam, sorted: Sorted) => {
  if (param === SortingParam.CODE) {
    return (sorted === Sorted.FIRST) ? sortByCodeMinToMax : sortByCodeMaxToMin
  }
  if (param === SortingParam.VOLUME) {
    return (sorted === Sorted.FIRST) ? sortByVolumeMaxToMin : sortByVolumeMinToMax
  }
  return sortByCodeMinToMax;
}

const sortByVolumeMinToMax = (a: IWallet, b: IWallet) => {
  return a.volume - b.volume;
}

const sortByVolumeMaxToMin = (a: IWallet, b: IWallet) => {
  return b.volume - a.volume;
}

const sortByCodeMinToMax = (a: IWallet, b: IWallet) => {
  if (a.code < b.code) {
    return -1;
  }
  if (a.code > b.code) {
    return 1;
  }
  return 0;
}

const sortByCodeMaxToMin = (a: IWallet, b: IWallet) => {
  if (a.code < b.code) {
    return 1;
  }
  if (a.code > b.code) {
    return -1;
  }
  return 0;
}

const useSortedWallets = (profile: IProfile, sorted: Sorted, sortingParam: SortingParam) => {
  const sortedWallets = useMemo(() => {
    if (sorted === Sorted.NOT_SORTED) {
      return profile.wallets
    } else {
      return [...profile.wallets].sort(getSortingFunction(sortingParam, sorted));
    }
  }, [sortingParam, sorted]);

  return sortedWallets;
};


const ProfileScreen = () => {

  const [sortingParam, setSortingParam] = useState<SortingParam>(SortingParam.CODE);
  const [sorted, setSorted] = useState<Sorted>(Sorted.NOT_SORTED);

  const profile = useSelector(profileSelector);

  const sortedWallets = useSortedWallets(profile, sorted, sortingParam);

  const onSortingIconPress = useCallback(
    (param: SortingParam) => {
      if (param !== sortingParam) {
        setSortingParam(param);
        setSorted(Sorted.FIRST);
      } else {
        setSorted((sorted) => {
          return (sorted === Sorted.SECOND) ? Sorted.NOT_SORTED : sorted + 1;
        })
      }
    }, [sorted, sortingParam]
  )

  const onSortByCodePress = useCallback(
    () => {
      onSortingIconPress(SortingParam.CODE);
    }, [onSortingIconPress]
  );

  const onSortByVolumePress = useCallback(
    () => {
      onSortingIconPress(SortingParam.VOLUME)
    }, [onSortingIconPress]
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.personalDataWidgetContainer}>
        <PersonalDataWidget
          avatar={profile.avatar}
          personalData={profile.personalData}
        />
      </View>

      <View style={styles.walletsListContainer}>
        <View style={styles.sortingTabContainer}>
          <Pressable onPress={onSortByCodePress}>
            <View style={styles.sortingByParamContainer}>
              <Text style={styles.sortingText}>{'Name'}</Text>
              {
                (sorted === Sorted.NOT_SORTED) || (sortingParam !== SortingParam.CODE)
                  ? <SortingIconInactive/>
                  : (sorted === Sorted.FIRST)
                  ? <SortingIconMinToMax/>
                  : <SortingIconMaxToMin/>
              }
            </View>
          </Pressable>

          <Pressable onPress={onSortByVolumePress}>
            <View style={styles.sortingByParamContainer}>
              <Text style={styles.sortingText}>{'Vol'}</Text>
              {
                (sorted === Sorted.NOT_SORTED) || (sortingParam !== SortingParam.VOLUME)
                  ? <SortingIconInactive/>
                  : (sorted === Sorted.FIRST)
                  ? <SortingIconMaxToMin/>
                  : <SortingIconMinToMax/>
              }
            </View>
          </Pressable>
        </View>

        <WalletsList
          wallets={sortedWallets}
        />
      </View>
    </View>
  )
}

export default ProfileScreen
