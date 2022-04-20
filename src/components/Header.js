import { View, Text } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import GlobalStyles from "../core-ui/GlobalStyles";
import { B } from "../constants/Constants";

const Header = ({ title, text }) => {
  return (
    <View style={GlobalStyles.headerView}>
      <View style={GlobalStyles.localisationBloc}>
        <Icon name="map-marker" type="font-awesome" size={21} color={B} />
        <Text style={GlobalStyles.localisationText}>ahmedabad, gujarat</Text>
      </View>
      <View style={GlobalStyles.textsBloc}>
        <Text style={GlobalStyles.headerTitle}>{title}</Text>
        <Text style={GlobalStyles.headerText}>{text}</Text>
      </View>
    </View>
  );
};

export default Header;
