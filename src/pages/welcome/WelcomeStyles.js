import { StyleSheet } from "react-native";
import { bgColor, Color1 } from "../../constants/Constants";

const WelcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor,
  },
  topViewContainer: {
    width: "100%",
    height: "65%",
  },
  bigCircle: {
    position: "absolute",
    width: 519,
    height: 519,
    left: 48,
    top: -104,
    backgroundColor: Color1,
    borderRadius: 1000,
  },
  smallCircle: {
    position: "absolute",
    width: 239,
    height: 239,
    left: -140,
    top: 281,
    backgroundColor: Color1,
    borderRadius: 1000,
    opacity: 0.4,
  },
  imageView: {
    width: 395,
    height: 395,
    position: "absolute",
    left: -6,
    top: 92,
  },
  indicatorView: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    // marginHorizontal: 175,
  },
  bottomViewContainer: {
    marginTop: 10,
    marginHorizontal: 35,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  welcomeTextContainer: {
    alignItems: "center",
    marginBottom: 85,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 16,
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    opacity: 0.6,
    paddingVertical: 2,
  },
});

export default WelcomeStyles;
