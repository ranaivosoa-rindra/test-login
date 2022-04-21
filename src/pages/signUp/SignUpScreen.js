import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import React, { useState } from "react";
import SignUpStyles from "./SignUpStyles";
import StatusBarComp from "../../components/StatusBarComp";
import Header from "../../components/Header";
import Icon from "react-native-vector-icons/Feather";
import { B } from "../../constants/Constants";
import GlobalStyles from "../../core-ui/GlobalStyles";
import SignInStyles from "../signIn/SignInStyles";
import FacebookButton from "../../components/FacebookButton";
import ButtonComp from "../../components/ButtonComp";
import IconElement from "../signIn/IconElement";
import { LinearGradient } from "expo-linear-gradient";
import { Color1, Color3, Wh } from "../../constants/Constants";
import { auth } from "../../services/Authentication";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpScreen = ({ navigation }) => {
  const [checking, setChecking] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [securePass, setSecurePass] = useState(true);

  const signUp = () => {
    if (email === "" || password === "" || username === "") {
      Alert.alert("Warning", "Please fill up everything");
    } else {
      if (checking === false) {
        Alert.alert(
          "Warning",
          "Please accept our term and conditions to sign up"
        );
      } else {
        createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
            // Alert.alert("Success", "New user added");
            navigation.navigate("SignInScreen");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

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
                value={email}
                onChangeText={(event) => setEmail(event)}
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
                value={username}
                onChangeText={(event) => setUsername(event)}
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
        <View style={SignUpStyles.termsView}>
          <TouchableOpacity
            style={SignUpStyles.box}
            onPress={() => setChecking(!checking)}
          >
            {checking === true ? (
              <Icon name="check" size={10} color={B} />
            ) : null}
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
          <TouchableOpacity onPress={() => signUp()}>
            <LinearGradient
              colors={[Color1, Color3]}
              style={SignInStyles.linearGd}
            >
              <Text style={SignInStyles.gdText}>SIGN UP</Text>
              <IconElement />
            </LinearGradient>
          </TouchableOpacity>
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
          <FacebookButton navigation={navigation} />
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
