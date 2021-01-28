import React from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";
import { IProfileWidget } from "../../../store/features/profile/types";
import { PersonalDataField } from "./PersonalDataField/PersonalDataField";

type IProps = IProfileWidget;

const FuncComponent = (props: IProps) => {

  const {
    avatar,
    personalData
  } = props;

  const {
    firstName,
    lastName
  } = personalData.name;

  const dateOfBirth = personalData.dateOfBirth;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={avatar
            ? {
            uri: avatar
            }
            : require('../../../icons/unknown-user.png')
          }
        />
      </View>

      <View style={styles.personalDataContainer}>
        <View style={styles.personalDataFieldContainer}>
          <PersonalDataField description={'First Name'} fieldValue={firstName}/>
        </View>

        <View style={styles.personalDataFieldContainer}>
          <PersonalDataField description={'Last Name'} fieldValue={lastName}/>
        </View>

        <View style={styles.personalDataFieldContainer}>
          <PersonalDataField description={'Date of Birth'} fieldValue={dateOfBirth}/>
        </View>
      </View>
    </View>
  )
}

export const PersonalDataWidget = React.memo(FuncComponent)
