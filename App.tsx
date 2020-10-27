import React, { useEffect, useMemo, useState } from 'react';
import { StatusBar, TextInput, View } from 'react-native';

import { ICurrencyPair } from "./types";
import { PairsList } from "./features/main_screen/PairsList/PairsList";
import styles from "./styles";
import { BackgroundColor } from "./enum/styles/BackgroundColor";

const myNet = require("./netconfig");

const App = () => {
  const [curPairs, setCurPairs] = useState<ICurrencyPair[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getCurPairs = () => {
    setIsRefreshing(true);

    fetch('http://' + myNet.IP + ':' + myNet.mockPort + '/currencies')
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
        ((pair.title + pair.currency1 + pair.currency2)
          .toUpperCase().indexOf(inputValue.toUpperCase()) !== -1)
      ));
    }
  }, [inputValue, curPairs]);

  const onRefresh = () => {
    getCurPairs();
  }

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
            placeholderTextColor='#ffffff'
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
