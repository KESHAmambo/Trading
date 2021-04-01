import React, { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { Animated, Easing, Pressable, View } from "react-native";
import { useSelector } from "react-redux";
import { newsHeadersSelector } from "../../../store/features/technicalInfo/selectors";
import { styles } from "./styles";
import { Height } from "../../../enum/styles/Height";
import { NewsHeaderItem } from "./NewsHeaderItem/NewsHeaderItem";
import { Color } from "../../../enum/styles/Color";
import { WINDOW_WIDTH } from "../../../utilites/constants";
import { useNavigation } from '@react-navigation/native';
import { Screens } from "../../../enum/screens/screens";

interface IProps {

}

interface IDisplayedNews {
  news1: string,
  news2: string
}

const opacityValue = new Animated.Value(0);
const yOffsetValue = new Animated.Value(0);

const animateYOffset = () => {
  yOffsetValue.setValue(0);
  Animated.timing(yOffsetValue,
    {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: false
    }).start();
};

const animateOpacity = () => {
  opacityValue.setValue(0);
  Animated.timing(opacityValue,
    {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: false
    }).start();
};

const animateScroll = () => {
  animateYOffset();
  animateOpacity();
};

const getSetIndexFunction = (arrayLength: number) => {
  return (index: number) => {
    if (index < arrayLength - 1) {
      return index + 1
    } else {
      return 0
    }
  }
}

const useDisplayedNews = (news: string[], newsIndex1: number, newsIndex2: number) => {
  return useMemo<IDisplayedNews>(() => {
    let [news1, news2] = (news.length === 0) ? ['', ''] : [news[newsIndex1], news[newsIndex2]]
    return ({
      news1,
      news2
    })
  }, [news, newsIndex1, newsIndex2]);
}

const useScrollNews = (newsLength: number, setNewsIndex1: Dispatch<SetStateAction<number>>, setNewsIndex2: Dispatch<SetStateAction<number>>) => {
  useEffect(() => {
    const scrollNews = setInterval(() => {
      setNewsIndex1(getSetIndexFunction(newsLength));
      setNewsIndex2(getSetIndexFunction(newsLength));

      animateScroll();
    }, 8000);

    if (newsLength === 0) {
      clearInterval(scrollNews)
    }

    return () => {
      clearInterval(scrollNews)
    };
  }, [newsLength, setNewsIndex1, setNewsIndex2]);
}

const FuncComponent = (props: IProps) => {

  const navigation = useNavigation();

  const [newsIndex1, setNewsIndex1] = useState<number>(0);
  const [newsIndex2, setNewsIndex2] = useState<number>(1);

  const news = useSelector(newsHeadersSelector);

  const displayedNews = useDisplayedNews(news, newsIndex1, newsIndex2);

  const newsLength = useMemo<number>(() => news.length, [news]);

  useEffect(() => {
    animateScroll();
  }, []);

  useScrollNews(newsLength, setNewsIndex1, setNewsIndex2);

  const top = yOffsetValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, (-0.5) * Height.TOOLBAR, (-1) * Height.TOOLBAR]
  });

  const opacity1 = opacityValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.5, 0]
  });

  const opacity2 = opacityValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0.5, 1]
  });

  const onPress = () => {
    navigation.navigate(Screens.NEWS, {
      newsId: newsIndex2
    })
  }

  return (
    <Pressable
      style={{flex: 1}}
      onPress={onPress}
      android_ripple={{color: Color.DARK_VIOLET, radius: 0.27*WINDOW_WIDTH}}
    >
      <View style={styles.mainContainer}>
        <NewsHeaderItem
          text={displayedNews.news1}
          style={{opacity: opacity1, top}}
        />

        <NewsHeaderItem
          text={displayedNews.news2}
          style={{opacity: opacity2, top}}
        />
      </View>
    </Pressable>
  )
}

export const NewsWidget = React.memo(FuncComponent)
