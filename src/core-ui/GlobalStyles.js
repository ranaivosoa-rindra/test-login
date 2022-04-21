import { StyleSheet } from "react-native";
import { B, Fblue, Wh } from "../constants/Constants";

const GlobalStyles = StyleSheet.create({
  line: {
    width: 305,
    height: 2,
    opacity: 0.2,
    backgroundColor: B,
  },
  headerView: {
    width: "100%",
  },
  localisationBloc: {
    flexDirection: "row",
    paddingTop: 62,
    paddingLeft: 67,
  },
  localisationText: {
    paddingLeft: 11,
    fontSize: 15,
    fontWeight: "bold",
  },
  textsBloc: {
    marginTop: 45,
    marginHorizontal: 35,
  },
  headerTitle: {
    fontSize: 24,
    paddingBottom: 8,
    fontWeight: "bold",
  },
  headerText: {
    fontSize: 14,
    fontWeight: "500",
    opacity: 0.6,
    color: "#171717",
    opacity: 0.6,
  },
  fbButton: {
    width: 305,
    height: 48,
    borderRadius: 30,
    backgroundColor: Fblue,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  fbText: {
    fontSize: 15,
    color: Wh,
    paddingLeft: 6,
  },
  barView: {
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.1,
    marginTop: 17,
  },
  bar: {
    width: 140,
    height: 5,
    backgroundColor: B,
    borderRadius: 100,
  },
});

export default GlobalStyles;
