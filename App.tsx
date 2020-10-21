import React, {useState, useEffect, useMemo} from 'react';
import {
  //SafeAreaView,
  View,
  TextInput,
  StatusBar
} from 'react-native';

import {ICurrencyPair} from "./types";
import {PairsList} from "./features/main_screen/PairsList/PairsList";

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

    const curPairsInterval = setInterval(() => {
      if (!isRefreshing) {
        getCurPairs();
      }
    }, 15000);

    return () => {
      clearInterval(curPairsInterval)
    }
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
      <StatusBar barStyle="dark-content"/>
      <View style={{
        flex: 1
      }}>
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          placeholder={'Search...'}
        />
        <PairsList
          currencyPairs={filteredPairs}
          isRefreshing={isRefreshing}
          onRefresh={onRefresh}
        />
      </View>
    </>
  );
};

export default App;
