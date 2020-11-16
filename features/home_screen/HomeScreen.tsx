import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { currencyPairsListSelector } from "../../store/features/pairsList/selectors";
import { TextInput, View } from "react-native";
import styles from "../../styles";
import { Color } from "../../enum/styles/Color";
import { PairsList } from "./PairsList/PairsList";

const HomeScreen = () => {
  const [inputValue, setInputValue] = useState('');

  const curPairs = useSelector(currencyPairsListSelector);

  const filteredPairs = useMemo(() => {
    if (inputValue === '') {
      return curPairs;
    } else {
      return curPairs.filter((pair) => (
        ((pair.title + pair.currency1 + pair.currency2)
          .toUpperCase().indexOf(inputValue.toUpperCase()) !== -1)
      ));
    }
  }, [inputValue, curPairs]);

  return (
    <View style={styles.container}>
      <View style={styles.searchingFieldContainer}>
        <TextInput
          style={styles.searchingField}
          onChangeText={setInputValue}
          value={inputValue}
          placeholder={'Search...'}
          placeholderTextColor={Color.WHITE}
        />
      </View>
      <View style={styles.pairsListContainer}>
        <PairsList
          currencyPairs={filteredPairs}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
