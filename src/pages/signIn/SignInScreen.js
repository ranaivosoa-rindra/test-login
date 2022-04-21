import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import SignInStyles from "./SignInStyles";
import StatusBarComp from "../../components/StatusBarComp";
import Icon from "react-native-vector-icons/Feather";
import Header from "../../components/Header";
import { B } from "../../constants/Constants";
import GlobalStyles from "../../core-ui/GlobalStyles";
import ButtonComp from "../../components/ButtonComp";
import FacebookButton from "../../components/FacebookButton";

const SignInScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={SignInStyles.container}>
        <StatusBarComp hidden={false} />
        <Header
          title="Let’s Sign You In"
          text="Welcome back, you’ve been missed!"
        />
        <View style={SignInStyles.inputsContainer}>
          <View style={SignInStyles.singleInputview}>
            <Text style={SignInStyles.label}>Username or Email</Text>
            <View style={SignInStyles.inputView}>
              <Icon name="user" size={30} color={B} />
              <TextInput
                placeholder="Type here"
                style={SignInStyles.input}
                keyboardType="email-address"
              />
            </View>
            <View style={GlobalStyles.line}></View>
          </View>
          <View style={SignInStyles.singleInputview}>
            <Text style={SignInStyles.label}>Password</Text>
            <View style={SignInStyles.inputView}>
              <Icon name="lock" size={30} color={B} />
              <TextInput
                placeholder="Type here"
                style={SignInStyles.input}
                secureTextEntry={true}
              />
              <TouchableOpacity style={SignInStyles.eyeView}>
                <Icon name="eye" size={30} color={B} />
              </TouchableOpacity>
            </View>
            <View style={GlobalStyles.line}></View>
          </View>
        </View>
        <View style={SignInStyles.bottomViewContainer}>
          <ButtonComp
            text="SIGN IN"
            ic_name="sign-in"
            nextScreen="ProfileScreen"
            pl={104}
            navigation={navigation}
          />
          <View style={SignInStyles.bottomTextView}>
            <Text style={SignInStyles.text}>Don't you have an account? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUpScreen")}
            >
              <Text style={SignInStyles.signInText}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <FacebookButton />
        </View>
        <View style={GlobalStyles.barView}>
          <TouchableOpacity style={GlobalStyles.bar}></TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;
