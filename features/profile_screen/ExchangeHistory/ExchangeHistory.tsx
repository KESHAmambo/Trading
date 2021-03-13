import React, { useEffect, useMemo, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { createApiURL } from '../../../netconfig';
import { fetchJSON } from "../../../utilites/utilites";
import { ITransaction } from "./types";
import SkeletonPlaceholder from "react-native-skeleton-placeholder/lib/SkeletonPlaceholder";
import { BackgroundColor } from "../../../enum/styles/BackgroundColor";

interface IProps {
  currencyCode: string
}

const FuncComponent = (props: IProps) => {

  const {
    currencyCode
  } = props;

  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [isTransactionsRefreshing, setIsTransactionsRefreshing] = useState<boolean>(false);

  useEffect(() => {
    setIsTransactionsRefreshing(true);

    fetchJSON(createApiURL('/exchange-history/' + currencyCode))
      .then((json) => {
        setTransactions(json.transactions as ITransaction[])
      })
      .catch((err) => {
        console.log('fetch failed: ' + err)
      })
      .finally(() => {
        setIsTransactionsRefreshing(false);
      });
  }, [setIsTransactionsRefreshing])

  const isNoTransactions = useMemo(() => transactions.length === 0,
    [transactions])

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.darkText}>{'Exchange history:'}</Text>

      <View style={styles.historyContainer}>
        {
          isTransactionsRefreshing ?
            <SkeletonPlaceholder
              speed={1200}
              backgroundColor={BackgroundColor.INPUT_FIELD_DISABLED}
              highlightColor={BackgroundColor.INPUT_FIELD}
            >
              <View style={styles.placeholderContainer}/>
            </SkeletonPlaceholder>
            :
            isNoTransactions ?
              <Text style={styles.darkText}>{'No transactions yet'}</Text>
              :
              transactions.map((transaction, index) => {
                const {
                  _id,
                  buy,
                  sell,
                  price,
                  fee,
                  createdAt
                } = transaction;

                return (
                  <View style={styles.transactionContainer} key={_id}>
                    <View style={styles.transactionHeaderContainer}>
                      <Text style={styles.brightText}>
                        {sell.name + ' \u279C ' + buy.name}
                      </Text>
                      <Text style={styles.darkText}>
                        {(new Date(createdAt)).toLocaleString()}
                      </Text>
                    </View>

                    <View style={styles.transactionBody}>
                      <View style={styles.transactionBodyLeft}>
                        <Text style={styles.darkText}>
                          {`Bought (${buy.name})`}
                        </Text>
                        <Text style={styles.darkText}>
                          {`Price (${sell.name})`}
                        </Text>
                        <Text style={styles.darkText}>
                          {`Fee (${sell.name})`}
                        </Text>
                        <Text style={styles.darkText}>
                          {`Sold (${sell.name})`}
                        </Text>
                      </View>

                      <View style={styles.transactionBodyRight}>
                        <Text style={styles.brightText}>
                          {buy.volume}
                        </Text>
                        <Text style={styles.brightText}>
                          {price}
                        </Text>
                        <Text style={styles.brightText}>
                          {fee}
                        </Text>
                        <Text style={styles.brightText}>
                          {sell.volume}
                        </Text>
                      </View>
                    </View>
                  </View>
                )
              })
        }
      </View>
    </View>
  )
}

export const ExchangeHistory = React.memo(FuncComponent)
