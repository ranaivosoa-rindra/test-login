import { StyleSheet } from "react-native";
import { bgColor } from "../../constants/Constants";

const SignUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor,
  },
  termsView: {
    // marginTop: 9,
    flexDirection: "row",
    marginLeft: 35.67,
  },
  box: {
    marginRight: 16.67,
    // backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    // borderColor: "#000",
    borderWidth: 1.7,
    width: 16,
    height: 16,
    borderRadius: 4,
    marginTop: 5,
  },
  termsTextView: {
    flexDirection: "column",
  },
  simpleText: {
    paddingBottom: 5,
    fontSize: 14,
    fontWeight: "bold",
    opacity: 0.6,
  },
  boldText: { fontSize: 14, fontWeight: "bold" },
  bottomViewContainer: {
    marginTop: 25,
    marginHorizontal: 35,
    alignItems: "center",
    paddingHorizontal: 10,
  },
});

export default SignUpStyles;
