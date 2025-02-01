import { StyleProp, Text, TextProps, TextStyle } from "react-native";
import React, { ReactNode } from "react";
import Colors from "../constants/Colors";
import FontSize from "../constants/FontSize";
import Font from "../constants/Font";

type Props = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
} & TextProps;

const AppText = ({ children, style, ...OtherProps }: Props) => {
  return (
    <Text
      style={[
        {
          color: Colors.primary,
          fontFamily: "Inter_400Regular",
          fontSize: FontSize.base,
        },
        style,
      ]}
      {...OtherProps}
    >
      {children}
    </Text>
  );
};

export default AppText;
