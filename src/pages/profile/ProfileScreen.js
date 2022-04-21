import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import ProfileStyles from "./ProfileStyles";
import StatusBarComp from "../../components/StatusBarComp";
import SignInStyles from "../signIn/SignInStyles";
import Icon from "react-native-vector-icons/Feather";
import { B, B2 } from "../../constants/Constants";
import GlobalStyles from "../../core-ui/GlobalStyles";
import IconFa from "./IconFa";
import ButtonComp from "../../components/ButtonComp";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const ProfileScreen = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView>
      <View style={ProfileStyles.container}>
        <Image
          source={require("../../assets/Gradient_bg.png")}
          style={ProfileStyles.img}
        />
        <Text style={ProfileStyles.profileText}>Profile</Text>
        <View style={ProfileStyles.cardView}>
          <Text style={ProfileStyles.name}>Carolina Johnson</Text>
          <Text style={ProfileStyles.place}>Miami, United States</Text>
          <Image
            source={require("../../assets/img_back.png")}
            style={ProfileStyles.imgPerson}
          />
        </View>
        <View style={SignInStyles.inputsContainer}>
          <View style={[SignInStyles.singleInputview, { marginVertical: 9 }]}>
            <Text style={[SignInStyles.label, { paddingBottom: 10 }]}>
              First Name & Last Name
            </Text>
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
          <View style={[SignInStyles.singleInputview, { marginVertical: 9 }]}>
            <Text style={[SignInStyles.label, { paddingBottom: 10 }]}>
              Address
            </Text>
            <View style={SignInStyles.inputView}>
              <Icon name="user" size={30} color={B} />
              <TextInput
                placeholder="Type here"
                style={SignInStyles.input}
                keyboardType="default"
              />
            </View>
            <View style={GlobalStyles.line}></View>
          </View>
          <View style={[SignInStyles.singleInputview, { marginVertical: 9 }]}>
            <Text style={[SignInStyles.label, { paddingBottom: 10 }]}>
              Phone Number
            </Text>
            <View style={SignInStyles.inputView}>
              {/* <Icon name="lock" size={30} color={B} /> */}
              <Image
                source={require("../../assets/ghana.png")}
                style={{
                  width: 25,
                  height: 25,
                }}
              />
              <IconFa />
              <Text
                style={{
                  marginLeft: 16.5,
                  color: B2,
                  opacity: 0.6,
                }}
              >
                +91
              </Text>
              <TextInput
                placeholder="99999999"
                style={SignInStyles.input}
                keyboardType="phone-pad"
              />
              <TouchableOpacity style={SignInStyles.eyeView}>
                <Icon name="check" size={30} color={B} />
              </TouchableOpacity>
            </View>
            <View style={GlobalStyles.line}></View>
          </View>
        </View>
        <View style={[SignInStyles.bottomViewContainer, { marginTop: 32 }]}>
          <ButtonComp
            text="SAVE YOUR PROFILE"
            ic_name="long-arrow-right"
            nextScreen="ProfileScreen"
            pl={60}
            navigation={navigation}
          />
        </View>
        <StatusBarComp hidden={true} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ProfileScreen;
