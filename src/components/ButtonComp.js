import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { Color1, Color3, Wh } from "../constants/Constants";

const ButtonComp = ({ text, ic_name, nextScreen, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(nextScreen)}>
      <LinearGradient
        colors={[Color1, Color3]}
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          width: 305,
          height: 44,
          borderRadius: 30,
          marginTop: 85,
        }}
      >
        <Text
          style={{
            color: Wh,
            fontSize: 14,
            fontWeight: "bold",
            paddingRight: 64,
          }}
        >
          {text}
        </Text>
        <Icon
          name={ic_name}
          type="font-awesome"
          size={24}
          color={Wh}
          style={{
            paddingRight: 18,
          }}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonComp;
