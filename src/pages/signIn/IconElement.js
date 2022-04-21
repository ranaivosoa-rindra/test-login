import { View, Text } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { Wh } from "../../constants/Constants";

const IconElement = () => {
  return (
    <Icon
      name="sign-in"
      type="font-awesome"
      size={24}
      color={Wh}
      style={{
        paddingLeft: 104,
      }}
    />
  );
};

export default IconElement;
