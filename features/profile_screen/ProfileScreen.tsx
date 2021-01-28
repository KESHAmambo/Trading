import { Image, Pressable, Text, View } from "react-native";
import React, { useMemo, useState } from "react";
import { styles } from "./styles";
import { PersonalDataWidget } from "./PersonalDataWidget/PersonalDataWidget";
import { useSelector } from "react-redux";
import { profileSelector } from "../../store/features/profile/selectors";
import { WalletsList } from "./WalletsList/WalletsList";
import { IWallet } from "./Wallet/types";
import { SortingParam } from "../../enum/wallets_sorting/SortingParam";
import { Sorted } from "../../enum/wallets_sorting/Sorted";

const createSortingFunction = (param: SortingParam, sorted: Sorted) => {
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


const ProfileScreen = () => {

  const [sortingParam, setSortingParam] = useState<SortingParam>(SortingParam.CODE);
  const [sorted, setSorted] = useState<Sorted>(Sorted.NOT_SORTED);

  const profile = useSelector(profileSelector);

  const sortedWallets = useMemo(() => {
    if (sorted === Sorted.NOT_SORTED) {
      return profile.wallets
    } else {
      return [...profile.wallets].sort(createSortingFunction(sortingParam, sorted));
    }
  }, [sortingParam, sorted])

  const onSortingIconPress = (param: SortingParam) => {
    if (param !== sortingParam) {
      setSortingParam(param);
      setSorted(Sorted.FIRST);
    } else {
      setSorted((sorted) => {
        return (sorted === Sorted.SECOND) ? Sorted.NOT_SORTED : sorted + 1;
      })
    }
  }

  const onSortByCodePress = () => {
    onSortingIconPress(SortingParam.CODE);
  }

  const onSortByVolumePress = () => {
    onSortingIconPress(SortingParam.VOLUME)
  }

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
                  ? <Image
                    style={styles.sortingIcon}
                    source={require('../../icons/sort-inactive.png')}
                  />
                  : (sorted === Sorted.FIRST)
                  ? <Image
                    style={styles.sortingIcon}
                    source={require('../../icons/sort-min-max.png')}
                  />
                  : <Image
                    style={styles.sortingIcon}
                    source={require('../../icons/sort-max-min.png')}
                  />
              }

            </View>
          </Pressable>

          <Pressable onPress={onSortByVolumePress}>
            <View style={styles.sortingByParamContainer}>
              <Text style={styles.sortingText}>{'Vol'}</Text>
              {
                (sorted === Sorted.NOT_SORTED) || (sortingParam !== SortingParam.VOLUME)
                  ? <Image
                    style={styles.sortingIcon}
                    source={require('../../icons/sort-inactive.png')}
                  />
                  : (sorted === Sorted.FIRST)
                  ? <Image
                    style={styles.sortingIcon}
                    source={require('../../icons/sort-max-min.png')}
                  />
                  : <Image
                    style={styles.sortingIcon}
                    source={require('../../icons/sort-min-max.png')}
                  />
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
