import React, { useState } from "react";
import { IWallet } from "../Wallet/types";
import { FlatList, ListRenderItem, Pressable, View } from "react-native";
import { Wallet } from "../Wallet/Wallet";
import { styles } from "./styles";
import { ExchangeHistory } from "../ExchangeHistory/ExchangeHistory";
import { Color } from "../../../enum/styles/Color";

interface IProps {
  wallets: IWallet[]
}

const keyExtractor = (item: IWallet) => item.name

const FuncComponent = (props: IProps) => {

  const {
    wallets
  } = props;

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const renderItem: ListRenderItem<IWallet> = (info) => {

    const {
      item,
      index
    } = info;

    const isWalletSelected = (selectedIndex === index);

    const onWalletPress = () => {
      setSelectedIndex(index)
    }

    return (
      <Pressable onPress={onWalletPress} android_ripple={{color: Color.BRIGHT_VIOLET, borderless: false}}>
        <View style={styles.mainContainerWrapper}>
          <View style={styles.mainContainer}>
            <Wallet
              wallet={item}
            />
            {
              isWalletSelected
                ? <ExchangeHistory/>
                : null
            }
          </View>
        </View>
      </Pressable>

    )
  }

  return (
    <FlatList
      data={wallets}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  )
}

export const WalletsList = React.memo(FuncComponent)
