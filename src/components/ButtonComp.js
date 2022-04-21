import { TouchableOpacity, Text, View } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { Color1, Color3, Wh } from "../constants/Constants";

const ButtonComp = ({ text, ic_name, nextScreen, pl, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(nextScreen)}>
      <LinearGradient
        colors={[Color1, Color3]}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: 330,
          height: 44,
          borderRadius: 30,
        }}
      >
        <Text
          style={{
            color: Wh,
            fontSize: 16,
            fontWeight: "bold",
            paddingLeft: pl,
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
            paddingLeft: pl,
          }}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonComp;
