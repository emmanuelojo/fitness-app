import { Platform, StyleSheet, SafeAreaView, StyleProp, ViewStyle } from "react-native";
import React, { ReactNode } from "react";

interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const Screen = ({ style, children }: Props) => {
  return <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
});

export default Screen;
