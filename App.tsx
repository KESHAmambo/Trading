import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  TextInput,
  StatusBar
} from 'react-native';

import { ICurrencyPair } from "./types";
import { PairsList } from "./features/main_screen/PairsList/PairsList";
import styles from "./styles";

const App = () => {
  const [curPairs, setCurPairs] = useState<ICurrencyPair[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getCurPairs = () => {
    setIsRefreshing(true);

    fetch('http://10.1.30.43:3000/currencies')
      .then((response) => response.json())
      .then((json) => {
        setCurPairs(json.currencyPairs)
      })
      .catch((error) => console.error(error))
      .finally(() => setIsRefreshing(false));
  }

  useEffect(() => {
    getCurPairs();
  }, []);

  const filteredPairs = useMemo(() => {
    if (inputValue === '') {
      return curPairs;
    } else {
      return curPairs.filter((pair) => (
        pair.title.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      ));
    }
  }, [inputValue, curPairs]);

  const onRefresh = () => {
    getCurPairs();
  }

  return (
    <>
      <StatusBar backgroundColor={'#161730'}/>
      <View style={styles.container}>
        <View style={styles.searchingFieldContainer}>
          <TextInput
            style={styles.searchingField}
            onChangeText={setInputValue}
            value={inputValue}
            placeholder={'Search...'}
            placeholderTextColor = '#ffffff'
          />
        </View>
        <View style={styles.pairsListContainer}>
          <PairsList
            currencyPairs={filteredPairs}
            isRefreshing={isRefreshing}
            onRefresh={onRefresh}
          />
        </View>
      </View>
    </>
  );
};

export default App;
