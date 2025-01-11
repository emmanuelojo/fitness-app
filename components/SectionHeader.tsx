import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";
import AppText from "./AppText";
import Colors from "../constants/Colors";
import { Link } from "expo-router";

interface Props {
  title?: string;
  link?: string;
  showSeeAll?: boolean;
}

const SectionHeader = ({ title, link, showSeeAll = true }: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: Spacing.margin.lg,
      }}
    >
      <AppText style={{ color: "black" }}>{title}</AppText>
      {showSeeAll && (
        <TouchableOpacity>
          {/* <Link href={link}> */}
          <AppText
            style={{
              fontSize: FontSize.sm,
              color: "black",
            }}
          >
            See all
          </AppText>
          {/* </Link> */}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({});
