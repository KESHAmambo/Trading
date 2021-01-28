import React from "react";
import { IWallet } from "../Wallet/types";
import { FlatList, ListRenderItem } from "react-native";
import { Wallet } from "../Wallet/Wallet";

interface IProps {
  wallets: IWallet[]
}

const keyExtractor = (item: IWallet) => item.icon

const renderItem: ListRenderItem<IWallet> = (info) => {
  const {item} = info;

  return (
    <Wallet
      wallet={item}
    />
  )
}

const FuncComponent = (props: IProps) => {

  const {
    wallets
  } = props;

  return (
    <FlatList
      data={wallets}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  )
}

export const WalletsList = React.memo(FuncComponent)
