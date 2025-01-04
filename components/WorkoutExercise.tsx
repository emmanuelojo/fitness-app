import { Image, ImageBackground, Platform, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import Colors from "@/constants/Colors";
import Spacing from "@/constants/Spacing";
import { Exercise } from "@/data";
import AppText from "./AppText";
import Font from "@/constants/Font";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  exercise: Exercise;
}

const WorkoutExercise = ({ exercise }: Props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.primary,
        borderRadius: Spacing.borderRadius.base,
        marginBottom: Spacing.margin.lg,
        padding: Spacing.padding.base,
        flexDirection: "row",
      }}
    >
      <Image
        source={exercise.image}
        style={{
          width: 100,
          height: 100,
          borderRadius: Spacing.borderRadius.base,
        }}
      />
      <View
        style={{
          marginLeft: Spacing.margin.base,
          justifyContent: "space-between",
        }}
      >
        <AppText
          style={{
            fontFamily: Font["poppins-semiBold"],
          }}
        >
          {exercise.name}
        </AppText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="time-outline" size={16} color={Colors.text} />
          <AppText
            style={{
              fontFamily: Font["poppins-regular"],
              marginLeft: Spacing.margin.sm,
            }}
          >
            {exercise.time} / {exercise.set} set
          </AppText>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="play" size={16} color={Colors.accent} />
          <AppText
            style={{
              fontFamily: Font["poppins-regular"],
              marginLeft: Spacing.margin.sm,
            }}
          >
            Play
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WorkoutExercise;
