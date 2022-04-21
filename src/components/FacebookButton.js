import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import GlobalStyles from "../core-ui/GlobalStyles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Wh } from "../constants/Constants";
import { auth } from "../services/Authentication";
import { FacebookAuthProvider } from "firebase/auth";
import * as Facebook from "expo-facebook";

const FacebookButton = ({ navigation }) => {
  async function logIn() {
    try {
      await Facebook.initializeAsync({
        appId: "983199625889569",
      });
      const { type, token, expirationDate, permissions, declinedPermissions } =
        await Facebook.logInWithReadPermissionsAsync({
          permissions: ["public_profile"],
        });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        // Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
        navigation.navigate("ProfileScreen");
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  return (
    <TouchableOpacity style={GlobalStyles.fbButton} onPress={() => logIn()}>
      <MaterialCommunityIcons name="facebook" color={Wh} size={19} />
      <Text style={GlobalStyles.fbText}>Connect with Facebook</Text>
    </TouchableOpacity>
  );
};

export default FacebookButton;
