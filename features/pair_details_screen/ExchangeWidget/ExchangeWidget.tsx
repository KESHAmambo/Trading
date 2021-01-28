import { TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { Color } from "../../../enum/styles/Color";
import { IPairName } from "../types";
import { GradientButton } from "../../GradientButton/GradientButton";

interface IProps {
  pairName: IPairName,
  currentValue: number | null
}

const PAYMENT_FEE_IN_PERCENT = 0.5;

const FuncComponent = (props: IProps) => {

  const {
    pairName,
    currentValue
  } = props;

  const [isExchangeProcessing, setIsExchangeProcessing] = useState<boolean>(false);
  const [inputValue1, setInputValue1] = useState<string>('');
  const [inputValue2, setInputValue2] = useState<string>('');

  const isOneOfInputsEmpty = (!(inputValue1 && inputValue2));
  const paymentFeeValue = (inputValue2 === '') ? '' : (Number(inputValue2) * PAYMENT_FEE_IN_PERCENT / 100).toFixed(8).toString();

  useEffect(() => {
    clearInputs();
  }, [pairName]);

  const clearInputs = () => {
    setInputValue1('');
    setInputValue2('');
  }

  const onChangeText1 = (text: string) => {
    if (currentValue !== null) {
      if (text === '') {
        clearInputs();
      } else if (!isNaN(Number(text))) {
        setInputValue1(text);
        setInputValue2((Number(text) * currentValue).toFixed(8).toString());
      }
    }
  }

  const onChangeText2 = (text: string) => {
    if (currentValue !== null) {
      if (text === '') {
        clearInputs();
      } else if (!isNaN(Number(text))) {
        setInputValue2(text);
        setInputValue1((Number(text) / currentValue).toFixed(8).toString());
      }
    }
  }

  const onExchangeButtonPress = () => {
    if (!isExchangeProcessing) {
      setIsExchangeProcessing(true);

      setTimeout(() => {
        clearInputs();
        setIsExchangeProcessing(false);
      }, 1000);
    }
  }

  return (
    <View style={styles.exchangeContainer}>
      <View style={styles.inputFieldContainer}>
        <TextInput
          style={styles.inputField}
          onChangeText={onChangeText1}
          value={inputValue1}
          editable={!isExchangeProcessing}
          keyboardType={'numeric'}
          placeholder={`Amount (${pairName.currencyCode1})`}
          placeholderTextColor={Color.BRIGHT_VIOLET}
        />
      </View>

      <View style={styles.inputFieldContainer}>
        <TextInput
          style={styles.inputField}
          onChangeText={onChangeText2}
          value={inputValue2}
          editable={!isExchangeProcessing}
          keyboardType={'numeric'}
          placeholder={`Amount (${pairName.currencyCode2})`}
          placeholderTextColor={Color.BRIGHT_VIOLET}
        />
      </View>

      <View style={[styles.inputFieldContainer, styles.paymentFeeContainer]}>
        <TextInput
          style={[styles.inputField, styles.paymentFee]}
          onChangeText={onChangeText2}
          value={paymentFeeValue}
          editable={false}
          placeholder={`Payment fee ${PAYMENT_FEE_IN_PERCENT}% (${pairName.currencyCode2})`}
          placeholderTextColor={Color.BRIGHT_VIOLET}
        />
      </View>

      <View style={styles.exchangeButtonContainer}>
        <GradientButton
          isProcessing={isExchangeProcessing}
          isDisabled={isOneOfInputsEmpty}
          onPress={onExchangeButtonPress}
          text={'EXCHANGE'}
        />
      </View>
    </View>
  );
}

export const ExchangeWidget = React.memo(FuncComponent)
