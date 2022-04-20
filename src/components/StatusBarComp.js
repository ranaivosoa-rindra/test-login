import { StatusBar } from "react-native";
import React from "react";

const StatusBarComp = (props) => {
  return (
    <StatusBar
      backgroundColor="transparent"
      hidden={props.hidden}
      translucent={true}
    />
  );
};

export default StatusBarComp;
