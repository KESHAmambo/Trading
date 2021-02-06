import { Image, Text, View } from "react-native";
import React, { useEffect, useMemo } from "react";
import { NewsPlaceholder } from "../NewsPlaceholder/NewsPlaceholder";
import { NewsItemType } from "../../../enum/news_type/NewsItemType";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { isNewsRefreshingSelector, newsBodiesSelector } from "../../../store/features/news/selectors";
import { fetchNews } from "../../../store/features/news/thunks";

interface IProps {
  newsPage: number,
  pagesToFetch: number[]
}

const FuncComponent = (props: IProps) => {

  const {
    newsPage,
    pagesToFetch
  } = props;

  const newsBodies = useSelector(newsBodiesSelector);
  const isNewsRefreshing = useSelector(isNewsRefreshingSelector);

  const isNewsToFetch = pagesToFetch.includes(newsPage);
  const isNewsLoaded = (newsBodies[newsPage] !== undefined);
  const newsBody = useMemo(() => isNewsLoaded ? newsBodies[newsPage] : [], [newsBodies, newsPage])

  const dispatch = useDispatch();

  useEffect(() => {
    if (isNewsToFetch && !isNewsLoaded) {
      dispatch(fetchNews(newsPage));
    }
  }, [pagesToFetch]);

  return (
    <View style={styles.mainContainer}>
      {(isNewsRefreshing && isNewsToFetch && !isNewsLoaded)
        ?
        <NewsPlaceholder/>
        :
        newsBody.map((newsItem, index) => {
          if (newsItem.type === NewsItemType.TEXT) {
            return (
              <Text
                key={index}
                style={styles.newsText}
                ellipsizeMode={"tail"}
              >
                {newsItem.body}
              </Text>
            )
          } else if (newsItem.type === NewsItemType.PICTURE) {
            return (
              <Image
                style={styles.newsImage}
                source={{uri: newsItem.body}}
                key={index}
              />
            )
          } else return null
        })}
    </View>
  )
}

export const NewsBody = React.memo(FuncComponent)
