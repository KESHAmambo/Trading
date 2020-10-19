
import React, {useState, useEffect, useMemo} from 'react';
import {
  View,
  TextInput,
  StatusBar, Button,
} from 'react-native';

import { ICurrencyPair } from "./types";
import { PairsList } from "./features/main_screen/PairsList";

const App = () => {
  const [curPairs, setCurPairs] = useState<ICurrencyPair[]>([]);
  const [inputValue, setInputValue] = useState('Search...');

  const onChangeText = (text: string) => {
    setInputValue(text);
  }

  const onInputFocus = () => {
    setInputValue('');
  }

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
    const curPairsInterval = setInterval(getCurPairs, 10000);

    return () => {
      clearInterval(curPairsInterval)
    }
  }, []);

  const renderedPairs = useMemo(() => {
    if (inputValue === '') {
      return curPairs;
    } else {
      return curPairs.filter((pair) => (
        pair.title.indexOf(inputValue.toUpperCase()) !== -1
      ));
    }
  }, [inputValue, curPairs]);

  const onPress = () => {
    getCurPairs();
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View>
        <Button title={'REFRESH'} onPress={onPress} />
        <TextInput
          onFocus={onInputFocus}
          onChangeText={text => onChangeText(text)}
          value={inputValue}
        />
        <PairsList currencyPairs={renderedPairs}/>
      </View>
    </>
  );
};

export default App;
