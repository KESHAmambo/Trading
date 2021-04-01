import { StackScreenProps } from "@react-navigation/stack";
import { IRootStackParamList } from "../types";
import { Screens } from "../../enum/screens/screens";
import { useSelector } from "react-redux";
import { Text, View } from "react-native";
import React, { useCallback, useMemo, useState } from "react";
import { styles } from "./styles";
import { ViewPager } from "@react-native-community/viewpager/src/ViewPager";
import { newsHeadersSelector } from "../../store/features/technicalInfo/selectors";
import { NewsBody } from "./NewsBody/NewsBody";
import { ViewPagerOnPageSelectedEvent } from "@react-native-community/viewpager";

type IProps = StackScreenProps<IRootStackParamList, Screens.NEWS>

const NewsScreen = (props: IProps) => {

  const {
    route,
    // navigation
  } = props;

  const {
    newsId
  } = route.params;

  const [selectedPage, setSelectedPage] = useState<number>(newsId);

  const newsHeaders = useSelector(newsHeadersSelector);

  //Содержит номера страниц для загрузки с сервера (выбранная страница + соседние)
  const pagesToFetch = useMemo(() => {
    const pages = [selectedPage - 1, selectedPage, selectedPage + 1];
    if (selectedPage === 0) {
      pages.shift();
    }
    if (selectedPage === newsHeaders.length - 1) {
      pages.pop();
    }
    return pages;
  }, [selectedPage])

  const onPageSelected = useCallback((event: ViewPagerOnPageSelectedEvent) => {
    setSelectedPage(event.nativeEvent.position);
  }, [setSelectedPage])

  return (
    <ViewPager
      style={styles.viewPagerContainer}
      initialPage={newsId}
      overScrollMode={"auto"}
      onPageSelected={onPageSelected}
    >
      {
        newsHeaders.map((header, headerIndex) => {
            return (
              <View style={styles.mainContainer} key={headerIndex} collapsable={false}>
                <View style={styles.newsContainer}>
                  <Text style={styles.newsHeader}>
                    {header}
                  </Text>

                  <NewsBody newsPage={headerIndex} pagesToFetch={pagesToFetch}/>
                </View>
              </View>
            )
          }
        )
      }
    </ViewPager>
  )
}

export default NewsScreen
