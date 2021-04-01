import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { IProfileWidget } from "../../../store/features/profile/types";
import { PersonalDataField } from "./PersonalDataField/PersonalDataField";
import { Avatar } from "../../elements/Avatar/Avatar";

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
        <Avatar
          style={styles.avatar}
          uri={avatar}
        />
      </View>

      <View style={styles.personalDataContainer}>
        <View style={styles.personalDataFieldContainer}>
          <PersonalDataField description={'First Name'} fieldValue={firstName ? firstName : 'Unknown'}/>
        </View>

        <View style={styles.personalDataFieldContainer}>
          <PersonalDataField description={'Last Name'} fieldValue={lastName ? lastName : 'Unknown'}/>
        </View>

        <View style={styles.personalDataFieldContainer}>
          <PersonalDataField description={'Date of Birth'} fieldValue={dateOfBirth ? dateOfBirth : '---'}/>
        </View>
      </View>
    </View>
  )
}

export const PersonalDataWidget = React.memo(FuncComponent)
