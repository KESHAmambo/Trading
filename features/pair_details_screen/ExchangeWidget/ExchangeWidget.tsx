import { Text, View } from "react-native";
import React, { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from "react";
import { styles } from "./styles";
import { IPairName } from "../types";
import { GradientButton } from "../../elements/GradientButton/GradientButton";
import { createApiURL } from "../../../netconfig"
import { useDispatch, useSelector } from "react-redux";
import { walletUpdated } from "../../../store/features/profile"
import { paymentFeeInPercentSelector } from "../../../store/features/technicalInfo/selectors";
import { InputFieldNumeric } from "../../elements/InputFieldNumeric/InputFieldNumeric";
import { walletsSelector } from "../../../store/features/profile/selectors";
import Popover from "react-native-popover-view/dist/Popover";

interface IProps {
  pairName: IPairName,
  currentRatio: number | null
}

const isDouble = (text: String) => {
  return text.includes('.');
}

const getOnChangeTextFunction = (currentRatio: (number | null), clearInputs: () => void, setBuyValue: Dispatch<SetStateAction<string>>, setSellValue: Dispatch<SetStateAction<string>>) => {
  return (inputType: ("buy" | "sell")) => {
    return (text: string) => {
      if (currentRatio !== null) {
        if (text === '') {
          clearInputs();
        } else if (!isNaN(Number(text))) {
          const isItBuyField = (inputType === "buy");
          const inputVolume = Number(text);

          //Добавляем возможность писать дробные значения
          if (text[text.length-1] === '.') {
            if (isItBuyField) {
              setBuyValue(inputVolume.toString() + '.');
            } else {
              setSellValue(inputVolume.toString() + '.');
            }
          } else {
            //Добавляем возможность писать 0 после точки
            if (isDouble(text) && (text[text.length-1] === '0')) {
              if (isItBuyField) {
                setBuyValue(text);
              } else {
                setSellValue(text);
              }
            } else {
              if (isItBuyField) {
                setBuyValue(inputVolume.toString());
                setSellValue((inputVolume*currentRatio).toFixed(8).toString());
              } else {
                setBuyValue((inputVolume/currentRatio).toFixed(8).toString());
                setSellValue(inputVolume.toString());
              }
            }
          }
        }
      }
    }
  }
}

const FuncComponent = (props: IProps) => {

  const {
    pairName,
    currentRatio
  } = props;

  const {
    currencyCode1,
    currencyCode2
  } = pairName;

  const dispatch = useDispatch();

  const [showExchangeFailedPopover, setShowExchangeFailedPopover] = useState<boolean>(false);
  const [exchangeErrorMessage, setExchangeErrorMessage] = useState<string>('');
  const [isExchangeProcessing, setIsExchangeProcessing] = useState<boolean>(false);
  const [inputValue1, setInputValue1] = useState<string>('');
  const [inputValue2, setInputValue2] = useState<string>('');

  const paymentFeeInPercent = useSelector(paymentFeeInPercentSelector);
  const wallets = useSelector(walletsSelector);

  useEffect(() => {
    clearInputs();
  }, [pairName]);

  const currencyToSellVolume = useMemo(() => {
    const currencyToSell = wallets.find((wallet) => wallet.code === currencyCode2);

    return currencyToSell ? currencyToSell.volume : 0;
  }, [wallets, currencyCode2]);

  const isOneOfInputsEmpty = (!(Number(inputValue1) && Number(inputValue2)));
  const paymentFeeValue = (inputValue2 === '') ? '' : (Number(inputValue2) * paymentFeeInPercent / 100).toFixed(8).toString();

  const isBalanceInsufficient = useMemo(() => {
    return inputValue2 ? (Number(inputValue2) + Number(paymentFeeValue)) > currencyToSellVolume : false
  }, [inputValue2, currencyToSellVolume])

  const clearInputs = useCallback(() => {
      setInputValue1('');
      setInputValue2('');
    }, [setInputValue1, setInputValue2]
  )

  const onPopoverDismiss = useCallback(() => {
    setShowExchangeFailedPopover(false);
  }, [setShowExchangeFailedPopover])

  const onChangeText = useCallback(
     getOnChangeTextFunction(currentRatio, clearInputs, setInputValue1, setInputValue2),
    [currentRatio, clearInputs, setInputValue1, setInputValue2]
  );

  const onChangeText1 = onChangeText("buy");
  const onChangeText2 = onChangeText("sell");

  const onExchangeButtonPress = () => {
    if (isBalanceInsufficient) {
      setShowExchangeFailedPopover(true);
      setExchangeErrorMessage('insufficient balance');
      return;
    }

    if (!isExchangeProcessing) {
      setIsExchangeProcessing(true);

      fetch(createApiURL('/exchange-history'), {
        method: 'POST',
        headers: {
          ["content-type"]: "application/json"
        },
        body: JSON.stringify({
            buy: {
              name: currencyCode1,
              volume: inputValue1
            },
            sell: {
              name: currencyCode2,
              volume: inputValue2
            },
            price: currentRatio?.toFixed(8).toString(),
            fee: paymentFeeValue
          }
        )
      })
        .then((response) => {
          dispatch(walletUpdated({
            currencyCode: currencyCode1,
            change: Number(inputValue1)
          }));
          dispatch(walletUpdated({
            currencyCode: currencyCode2,
            change: (-1) * (Number(inputValue2) + Number(paymentFeeValue))
          }));
        })
        .catch((err) => {
          setShowExchangeFailedPopover(true);
          setExchangeErrorMessage('server error');
        })
        .finally(() => {
          clearInputs();
          setIsExchangeProcessing(false);
        })
    }
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputFieldHeaderContainer}>
        <Text style={styles.inputFieldHeader}>
          {`Buy ${currencyCode1}:`}
        </Text>
      </View>

      <InputFieldNumeric
        onChangeText={onChangeText1}
        value={inputValue1}
        editable={!isExchangeProcessing}
        placeholder={`Amount (${currencyCode1})`}
      />

      <View style={styles.inputFieldHeaderContainer}>
        <Text style={styles.inputFieldHeader}>
          {`Sell ${currencyCode2}:`}
        </Text>
        <Text style={styles.inputFieldHeader}>
          {`Available: ${currencyToSellVolume ? currencyToSellVolume.toFixed(8) : 0}`}
        </Text>
      </View>

      <InputFieldNumeric
        onChangeText={onChangeText2}
        value={inputValue2}
        editable={!isExchangeProcessing}
        placeholder={`Amount (${currencyCode2})`}
      />

      <View style={styles.inputFieldHeaderContainer}>
        <Text style={styles.inputFieldHeader}>
          {`Fee in ${currencyCode2}:`}
        </Text>
      </View>

      <InputFieldNumeric
        viewStyle={styles.paymentFeeContainer}
        textStyle={styles.paymentFee}
        value={paymentFeeValue}
        editable={false}
        placeholder={`Payment fee ${paymentFeeInPercent}% (${currencyCode2})`}
      />

      <View style={styles.exchangeButtonContainer}>
        <GradientButton
          isProcessing={isExchangeProcessing}
          isDisabled={isOneOfInputsEmpty}
          onPress={onExchangeButtonPress}
          text={'EXCHANGE'}
        />
      </View>

      <Popover
        popoverStyle={styles.popoverContainer}
        isVisible={showExchangeFailedPopover}
        onRequestClose={onPopoverDismiss}
      >
        <Text style={styles.popoverHeaderText}>Exchange Failed</Text>
        <Text style={styles.popoverBodyText}>{`Unable to make an exchange due to ${exchangeErrorMessage}.`}</Text>
      </Popover>
    </View>
  );
}

export const ExchangeWidget = React.memo(FuncComponent)
