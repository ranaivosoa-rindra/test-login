import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import WelcomeStyles from "./WelcomeStyles";
import { Color1, Color2 } from "../../constants/Constants";

const Indicator = () => {
  return (
    <View style={WelcomeStyles.indicatorView}>
      <TouchableOpacity
        style={{
          width: 8,
          height: 5,
          backgroundColor: Color2,
          borderRadius: 2.5,
        }}
      ></TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 16,
          height: 5,
          backgroundColor: Color1,
          borderRadius: 2.5,
          marginHorizontal: 8,
        }}
      ></TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 8,
          height: 5,
          backgroundColor: Color2,
          borderRadius: 2.5,
        }}
      ></TouchableOpacity>
    </View>
  );
};

export default Indicator;
