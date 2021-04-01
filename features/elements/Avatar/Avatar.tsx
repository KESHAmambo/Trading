import React from "react";
import { Image, ImageStyle, StyleProp } from "react-native";
import { styles } from "./styles";

interface IProps {
  uri?: string,
  style?: StyleProp<ImageStyle>
}

export const Avatar = React.memo(
  (props: IProps) => {

    const {
      style,
      uri
    } = props;

    return (
      <Image
        style={[styles.avatar, style]}
        source={uri
          ? {
            uri
          }
          : require('../../../icons/unknown-user.png')
        }
      />
    )
  }
)
