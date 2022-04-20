import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import GlobalStyles from "../core-ui/GlobalStyles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Wh } from "../constants/Constants";

const FacebookButton = () => {
  return (
    <TouchableOpacity style={GlobalStyles.fbButton}>
      <MaterialCommunityIcons name="facebook" color={Wh} size={19} />
      <Text style={GlobalStyles.fbText}>Connect with Facebook</Text>
    </TouchableOpacity>
  );
};

export default FacebookButton;
