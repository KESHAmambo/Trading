import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currencyPairsListSelector } from "../../store/features/pairsList/selectors";
import { ScrollView, TextInput, View } from "react-native";
import { styles } from "./styles";
import { Color } from "../../enum/styles/Color";
import { PairsList } from "./PairsList/PairsList";
import { StackScreenProps } from "@react-navigation/stack";
import { IRootStackParamList } from "../types";
import { Screens } from "../../enum/screens/screens";
import { Toolbar } from "./Toolbar/Toolbar";
import { fetchTechnicalInfo } from "../../store/features/technicalInfo/thunks";
import { fetchProfile } from "../../store/features/profile/thunks";

type IProps = StackScreenProps<IRootStackParamList, Screens.HOME>

const HomeScreen = (props: IProps) => {

  const {
    // route,
    // navigation
  } = props;

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    dispatch(fetchTechnicalInfo());
  }, []);

  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  const curPairs = useSelector(currencyPairsListSelector);

  const filteredBySearchPairs = useMemo(() => {
    if (inputValue === '') {
      return curPairs;
    } else {
      return curPairs.filter((pair) => (
        ((pair.currencyCode1 + pair.currencyCode2 + pair.currencyName1 + pair.currencyName2)
          .toUpperCase().indexOf(inputValue.toUpperCase()) !== -1)
      ));
    }
  }, [inputValue, curPairs]);

  return (
    <View style={styles.scrollViewWrapper}>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <View style={styles.searchingFieldContainerWrapper}>
          <View style={styles.searchingFieldContainer}>
            <TextInput
              style={styles.searchingField}
              onChangeText={setInputValue}
              value={inputValue}
              placeholder={'Search...'}
              placeholderTextColor={Color.BRIGHT_VIOLET}
            />
          </View>
        </View>

        <View style={styles.pairsListContainer}>
          <PairsList
            currencyPairs={filteredBySearchPairs}
          />
        </View>

        <Toolbar/>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
