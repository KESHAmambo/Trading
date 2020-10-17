
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar, Button,
} from 'react-native';

import styles from "./styles";
import { ICurrencyPair } from "./types";
import { PairsList } from "./features/main_screen/PairsList";

const App = () => {
  const [curPairs, setCurPairs] = useState<ICurrencyPair[]>([]);

  const getCurPairs = () => {
    fetch('http://10.1.30.43:3000/currencies')
      .then((response) => response.json())
      .then((json) => {
        setCurPairs(json.currencyPairs)
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getCurPairs();
  }, []);

  const onPress = () => {
    getCurPairs();
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button title={'REFRESH'} onPress={onPress} />
        <ScrollView
          style={styles.scrollView}
        >
          <PairsList currencyPairs={curPairs}/>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
