import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import Spacing from "../constants/Spacing";
import Colors from "../constants/Colors";

interface Props {
  style?: StyleProp<ViewStyle>;
  size?: number;
  color?: string;
  name: keyof typeof Feather.glyphMap; // keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
}

const IconButton = ({ style, size = 24, color = Colors.black, name, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          height: 40,
          width: 40,
          backgroundColor: Colors.green,
          // borderWidth: 1,
          // borderColor: Colors.border,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: Spacing.borderRadius.base,
        },
        style,
      ]}
    >
      <Feather name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;
