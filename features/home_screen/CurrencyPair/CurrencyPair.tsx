import React from "react";
import { Dimensions, Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { ICurrencyPair } from "./types";
import LineChart from "react-native-chart-kit/dist/line-chart";
import { BackgroundColor } from "../../../enum/styles/BackgroundColor";
import { useNavigation } from '@react-navigation/native'

interface IProps {
  pair: ICurrencyPair
}

const onCurrencyPairLongPress = () => {
};

const FuncComponent = (props: IProps) => {
  const {
    pair
  } = props;

  const {
    id,
    icon1,
    icon2,
    currencyCode1,
    currencyCode2,
    currencyName1,
    currencyName2,
    chartData,
    ratio,
    change,
    sign,
  } = pair;

  const navigation = useNavigation();

  const onCurrencyPairPress = () => {
    navigation.navigate('PairDetails', {
      pairId: id
    })
  }

  return (
    <Pressable
      onPress={onCurrencyPairPress}
      onLongPress={onCurrencyPairLongPress}
    >
      <View style={styles.pairContainer}>
        <View style={styles.iconsContainer}>
          <Image
            source={{uri: icon1}}
            style={[
              styles.icon,
              styles.iconPosition1
            ]}
          />

          <Image
            source={{uri: icon2}}
            style={[
              styles.icon,
              styles.iconPosition2
            ]}
          />
        </View>

        <View style={styles.pairNameContainer}>
          <Text style={styles.pairName}>
            {currencyCode1 + ' \u21C4 ' + currencyCode2}
          </Text>

          <Text style={styles.pairFullName}>
            {currencyName1 + ', ' + currencyName2}
          </Text>
        </View>

        <View style={styles.chartContainer}>
          <LineChart
            data={{
              labels: [],
              datasets: [{
                data: chartData
              }]
            }}
            width={Dimensions.get("window").width * 0.38} // from react-native
            height={65}
            withDots={false}
            withInnerLines={false}
            withOuterLines={false}
            withVerticalLabels={false}
            withHorizontalLabels={false}
            transparent={true}
            chartConfig={{
              backgroundGradientFrom: BackgroundColor.PAIR,
              backgroundGradientTo: BackgroundColor.PAIR,
              color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`,
            }}
            bezier
            style={{
              position: "absolute",
              top: -40,
              left: -65
            }}
          />
        </View>

        <View style={styles.pairChangeAndRatioContainer}>
          <Text style={styles.pairRatio}>
            {ratio}
          </Text>

          <View style={[
            styles.pairChangeContainer,
            (sign === '+') ? styles.backgroundGreen : styles.backgroundRed
          ]}>
            <Text style={styles.pairChange}>
              {sign + change + '%'}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export const CurrencyPair = React.memo(FuncComponent);
