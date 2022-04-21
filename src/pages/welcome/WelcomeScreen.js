import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import WelcomeStyles from "./WelcomeStyles";
import StatusBarComp from "../../components/StatusBarComp";
import Indicator from "./Indicator";
import ButtonComp from "../../components/ButtonComp";
import GlobalStyles from "../../core-ui/GlobalStyles";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={WelcomeStyles.container}>
      <View style={WelcomeStyles.topViewContainer}>
        <View style={WelcomeStyles.bigCircle}></View>
        <View style={WelcomeStyles.smallCircle}></View>
        <View style={WelcomeStyles.imageView}>
          <Image
            source={require("../../assets/beoplay-a9-4-gen-hero-black.png")}
            style={WelcomeStyles.img}
          />
          <Indicator />
        </View>
      </View>
      <View style={WelcomeStyles.bottomViewContainer}>
        <View style={WelcomeStyles.welcomeTextContainer}>
          <Text style={WelcomeStyles.title}>Welcome to our world !</Text>
          <Text style={WelcomeStyles.text}>
            With long experience in the audio industry,
          </Text>
          <Text style={WelcomeStyles.text}>
            we create the best quality products
          </Text>
        </View>
        <ButtonComp
          text="GET STARTED"
          ic_name="long-arrow-right"
          nextScreen="SignInScreen"
          pl={80}
          navigation={navigation}
        />
      </View>
      <View style={[GlobalStyles.barView, { marginTop: 25 }]}>
        <TouchableOpacity style={GlobalStyles.bar}></TouchableOpacity>
      </View>
      <StatusBarComp hidden={false} />
    </View>
  );
};

export default WelcomeScreen;
