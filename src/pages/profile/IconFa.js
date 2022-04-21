import { TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { B2 } from "../../constants/Constants";

const IconFa = () => {
  return (
    <TouchableOpacity>
      <Icon
        name="sort-down"
        size={20}
        color={B2}
        style={{
          marginLeft: 7,
          paddingBottom: 10,
        }}
      />
    </TouchableOpacity>
  );
};

export default IconFa;
