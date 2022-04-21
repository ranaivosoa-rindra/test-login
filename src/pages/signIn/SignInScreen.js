import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import React, { useState } from "react";
import SignInStyles from "./SignInStyles";
import StatusBarComp from "../../components/StatusBarComp";
import Icon from "react-native-vector-icons/Feather";
import Header from "../../components/Header";
import { B } from "../../constants/Constants";
import GlobalStyles from "../../core-ui/GlobalStyles";
import ButtonComp from "../../components/ButtonComp";
import FacebookButton from "../../components/FacebookButton";
import { auth } from "../../services/Authentication";
import { LinearGradient } from "expo-linear-gradient";
import { Color1, Color3, Wh } from "../../constants/Constants";
import IconElement from "./IconElement";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [securePass, setSecurePass] = useState(true);

  const signIn = () => {
    if (email === "" || password === "") {
      Alert.alert("Warning", "Please fill up everything");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigation.navigate("ProfileScreen");
        })
        .catch((error) => {
          // console.log(error);
          Alert.alert("Error", "Can't log in");
        });
    }
  };

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
                value={email}
                onChangeText={(event) => setEmail(event)}
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
                secureTextEntry={securePass}
                value={password}
                onChangeText={(event) => setPassword(event)}
              />
              <TouchableOpacity
                style={SignInStyles.eyeView}
                onPress={() => setSecurePass(!securePass)}
              >
                <Icon name="eye" size={30} color={B} />
              </TouchableOpacity>
            </View>
            <View style={GlobalStyles.line}></View>
          </View>
        </View>
        <View style={SignInStyles.bottomViewContainer}>
          <TouchableOpacity onPress={() => signIn()}>
            <LinearGradient
              colors={[Color1, Color3]}
              style={SignInStyles.linearGd}
            >
              <Text style={SignInStyles.gdText}>SIGN IN</Text>
              <IconElement />
            </LinearGradient>
          </TouchableOpacity>
          <View style={SignInStyles.bottomTextView}>
            <Text style={SignInStyles.text}>Don't you have an account? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUpScreen")}
            >
              <Text style={SignInStyles.signInText}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <FacebookButton navigation={navigation} />
        </View>
        <View style={GlobalStyles.barView}>
          <TouchableOpacity style={GlobalStyles.bar}></TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;
