import { StyleSheet } from "react-native";
import { bgColor, Color2, Wh } from "../../constants/Constants";

const SignInStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor,
  },
  inputsContainer: {
    marginTop: 20,
  },
  singleInputview: {
    marginVertical: 14,
    marginHorizontal: 35,
  },
  label: {
    fontSize: 13,
    fontWeight: "500",
    color: Color2,
    paddingBottom: 20,
  },
  inputView: {
    flexDirection: "row",
    paddingBottom: 10,
    alignItems: "center",
  },
  input: {
    fontSize: 16,
    paddingHorizontal: 12,
  },
  eyeView: {
    position: "absolute",
    left: "84.57%",
    right: "1.58%",
    top: "2.5%",
    bottom: "20.5%",
  },
  bottomViewContainer: {
    marginTop: 150,
    marginHorizontal: 35,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  bottomTextView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 305,
    paddingHorizontal: 35,
    paddingTop: 16,
    paddingBottom: 46,
  },
  text: {
    fontSize: 15,
    color: Color2,
  },
  signInText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default SignInStyles;
