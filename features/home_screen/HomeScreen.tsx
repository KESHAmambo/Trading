import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrencyPairs } from "./PairsList/pairsListSlice";
import { StatusBar, TextInput, View } from "react-native";
import styles from "../../styles";
import { Color } from "../../enum/styles/Color";
import { PairsList } from "./PairsList/PairsList";
import { BackgroundColor } from "../../enum/styles/BackgroundColor";

const HomeScreen = () => {
  const [inputValue, setInputValue] = useState('');

  const curPairs = useSelector(selectCurrencyPairs);

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
    <>
      <StatusBar backgroundColor={BackgroundColor.APP}/>
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
    </>
  );
};

export default HomeScreen;
