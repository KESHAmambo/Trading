import React, { useMemo, useState } from 'react';
import { StatusBar, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux'

import { PairsList } from "./features/main_screen/PairsList/PairsList";
import styles from "./styles";
import { BackgroundColor } from "./enum/styles/BackgroundColor";
import { Color } from "./enum/styles/Color";
import { selectCurrencyPairs } from "./features/main_screen/PairsList/pairsListSlice";

const App = () => {
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

export default App;
