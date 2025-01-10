import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Font from "@/constants/Font";
import Spacing from "@/constants/Spacing";
import Colors from "@/constants/Colors";
import { Workout as WorkoutType } from "@/data";
import { ImageBackground } from "expo-image";
import AppText from "../AppText";
import { FireIcon } from "@/assets/icons/FireIcon";
import { ClockIcon } from "@/assets/icons/ClockIcon";
import { PlayIcon } from "@/assets/icons/PlayIcon";

interface Props {
  workout?: WorkoutType;
  onPress?: (id: number) => void;
}

const PopularWorkout = ({ workout, onPress }: Props) => {
  const handlePress = () => {
    // if (onPress) onPress(workout.id);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        backgroundColor: Colors.primary,
        marginRight: Spacing.margin.lg,
        borderRadius: Spacing.borderRadius.base,
        overflow: "hidden",
      }}
    >
      <ImageBackground
        source={require("@/assets/images/popular-workouts/pw-1.png")}
        style={{ width: 270, height: 174, flex: 1, paddingHorizontal: 20, paddingVertical: 20, borderRadius: 20 }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <View style={{ width: "60%", flexDirection: "column", gap: 14 }}>
            <AppText style={{ fontWeight: "800", fontSize: 24, color: "#ffffff" }}>Lower Body Training</AppText>

            <View style={{ flexDirection: "column", gap: 10 }}>
              <View style={styles.transparentWrapper}>
                <FireIcon />

                <AppText style={styles.transparentText}>500 Kcal</AppText>
              </View>

              <View style={styles.transparentWrapper}>
                <ClockIcon />

                <AppText style={styles.transparentText}>50 Min</AppText>
              </View>
            </View>
          </View>
          <View
            style={{
              minWidth: 38,
              width: 38,
              height: 38,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#BBF246",
              borderRadius: "50%",
            }}
          >
            <PlayIcon />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  transparentWrapper: {
    // width: "auto",
    height: 26,
    backgroundColor: "rgba(255,255,255,0.8)",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 9,
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    alignSelf: "flex-start",
  },
  transparentText: {
    color: "#192126",
    fontSize: 12,
  },
});

export default PopularWorkout;
