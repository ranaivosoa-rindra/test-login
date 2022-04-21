import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import SignUpStyles from "./SignUpStyles";
import StatusBarComp from "../../components/StatusBarComp";
import Header from "../../components/Header";
import Icon from "react-native-vector-icons/Feather";
import { B } from "../../constants/Constants";
import GlobalStyles from "../../core-ui/GlobalStyles";
import SignInStyles from "../signIn/SignInStyles";
import FacebookButton from "../../components/FacebookButton";
import ButtonComp from "../../components/ButtonComp";

const SignUpScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={SignUpStyles.container}>
        <Header title="Getting Started" text="Create an account to continue!" />
        <View style={SignInStyles.inputsContainer}>
          <View style={SignInStyles.singleInputview}>
            <Text style={SignInStyles.label}>Email</Text>
            <View style={SignInStyles.inputView}>
              <Icon name="mail" size={30} color={B} />
              <TextInput
                placeholder="Type here"
                style={SignInStyles.input}
                keyboardType="email-address"
              />
            </View>
            <View style={GlobalStyles.line}></View>
          </View>
          <View style={SignInStyles.singleInputview}>
            <Text style={SignInStyles.label}>Username</Text>
            <View style={SignInStyles.inputView}>
              <Icon name="user" size={30} color={B} />
              <TextInput
                placeholder="Type here"
                style={SignInStyles.input}
                keyboardType="default"
              />
              <View style={SignInStyles.eyeView}>
                <Icon name="check" size={20} color={B} />
              </View>
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
        <View style={SignUpStyles.termsView}>
          <TouchableOpacity style={SignUpStyles.box}>
            <Icon name="check" size={10} color={B} />
          </TouchableOpacity>
          <View style={SignUpStyles.termsTextView}>
            <Text style={SignUpStyles.simpleText}>
              By creating an account, you agree to
            </Text>
            <TouchableOpacity
              onPress={() => console.log("Check out our term and conditions")}
            >
              <Text style={SignUpStyles.boldText}>our Term & Conditions</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={SignUpStyles.bottomViewContainer}>
          <ButtonComp
            text="SIGN UP"
            ic_name="sign-in"
            nextScreen="SignInScreen"
            pl={102}
            navigation={navigation}
          />
          <View
            style={[
              SignInStyles.bottomTextView,
              { paddingHorizontal: 40, paddingBottom: 30 },
            ]}
          >
            <Text style={SignInStyles.text}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignInScreen")}
            >
              <Text style={SignInStyles.signInText}>Sign in</Text>
            </TouchableOpacity>
          </View>
          <FacebookButton />
        </View>
        <View style={[GlobalStyles.barView, { marginTop: 8 }]}>
          <TouchableOpacity style={GlobalStyles.bar}></TouchableOpacity>
        </View>
        <StatusBarComp hidden={false} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;
