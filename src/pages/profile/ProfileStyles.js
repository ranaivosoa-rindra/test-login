import { StyleSheet } from "react-native";
import { B, B1, bgColor, G, Wh } from "../../constants/Constants";

const ProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor,
  },
  img: {
    width: 400,
    height: 317,
    position: "absolute",
    top: 0,
    right: 0,
  },
  profileText: {
    marginTop: 40,
    color: Wh,
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  imgPerson: {
    position: "absolute",
    // width: 126px;
    // height: 126px;
    left: 100,
    top: -75,
  },
  cardView: {
    marginTop: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Wh,
    width: 327,
    height: 178,
    marginHorizontal: 36,
    borderRadius: 20,
    shadowColor: B,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 100,
    shadowOpacity: 0.6,
    elevation: 15,
  },
  name: {
    color: B1,
    fontSize: 24,
    fontWeight: "400",
    // paddingTop: 5,
  },
  place: {
    color: G,
    fontSize: 14,
  },
});

export default ProfileStyles;
