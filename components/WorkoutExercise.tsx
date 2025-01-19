import { Image, TouchableOpacity, View } from "react-native";
import Colors from "@/constants/Colors";
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
        height: 74,
        backgroundColor: "#384046",
        borderRadius: 16,
        padding: 8,
        flexDirection: "row",
        gap: 8,
        position: "relative",
      }}
    >
      <Image
        source={exercise.image}
        style={{
          width: 58,
          height: 58,
          borderRadius: 8,
        }}
      />

      <View
        style={{
          width: "83%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <View style={{ flexDirection: "column", gap: 8 }}>
          <AppText
            style={{
              color: "#FFFFFF",
              fontFamily: Font["poppins-semiBold"],
              textAlign: "left",
            }}
          >
            {exercise.name}
          </AppText>

          <AppText
            style={{
              fontFamily: Font["poppins-regular"],
              fontSize: 13,
              color: "#FFFFFF50",
              textAlign: "left",
            }}
          >
            {exercise.time}
          </AppText>
        </View>

        <View
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#192126",
          }}
        >
          <Ionicons name="play" size={16} color={Colors.accent} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WorkoutExercise;
