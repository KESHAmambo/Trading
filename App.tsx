
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar, Button,
} from 'react-native';

import styles from "./styles";
import {ICurrencyPair, PairsList} from "./features/main_screen/PairsList";

const App = () => {
  const [curPairs, setCurPairs] = useState<ICurrencyPair[]>([]);

  const showCurPairs = () => {
    console.log('in showCurPairs');
    fetch('http://10.1.30.43:3000/currencies')
      .then((response) => response.json())
      .then((json) => {
        setCurPairs(json.currencyPairs)
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    showCurPairs();
  });

  const onPress = () => {
    console.log('from onPress');
    showCurPairs();
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          style={styles.scrollView}
        >
          <Button title={'KNOPKA'} onPress={onPress} />
          <PairsList currencyPairs={curPairs}/>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
