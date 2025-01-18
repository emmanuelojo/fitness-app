import { ImageBackground, ScrollView, StyleSheet, TextInput, View } from "react-native";
import { Link, useRouter } from "expo-router";
import Screen from "@/components/Screen";
import { bestForYou, categories, challenges, todayPlans, user, warmUps, workoutPlans, workouts } from "@/data";
import Colors from "@/constants/Colors";
import Font from "@/constants/Font";
import FontSize from "@/constants/FontSize";
import AppText from "@/components/AppText";
import Spacing from "@/constants/Spacing";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import SectionHeader from "@/components/SectionHeader";
import BestForYou from "@/components/explore/BestForYou";
import ChallengeCard from "@/components/explore/ChallengeCard";

const explore = () => {
  return (
    <Screen>
      <ScrollView
        style={{
          paddingHorizontal: Spacing.padding.base,
          paddingVertical: Spacing.padding.base,
          gap: 24,
        }}
      >
        <ImageBackground
          source={require("@/assets/images/workouts/home-workout.jpg")}
          resizeMode="cover"
          style={{ flex: 1, borderRadius: 23, overflow: "hidden" }}
        >
          <LinearGradient
            style={{
              height: 180,
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 26,
            }}
            colors={[`rgba(0,0,0,0.1)`, `#000`]}
          >
            <AppText style={{ maxWidth: 210, color: "#ffffff", fontSize: 24, fontWeight: 600 }}>
              Best Home Workouts
            </AppText>

            <View style={{ flexDirection: "row", gap: 10, alignItems: "center", cursor: "pointer" }}>
              <AppText style={{ color: Colors.green }}>See more</AppText>

              <Ionicons name="chevron-forward" color={Colors.green} />
            </View>
          </LinearGradient>
        </ImageBackground>

        <View>
          <SectionHeader title="Best for you" showSeeAll={false} />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            pagingEnabled
            snapToInterval={270 + Spacing.margin.lg}
            style={{ marginBottom: 20 }}
          >
            {bestForYou.map((workout) => (
              <BestForYou workout={workout} key={workout.id} />
            ))}
          </ScrollView>
        </View>

        <View>
          <SectionHeader title="Challenge" showSeeAll={false} />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            pagingEnabled
            snapToInterval={110 + Spacing.margin.lg}
            style={{ marginBottom: 20 }}
          >
            {challenges.map((challenge) => (
              <ChallengeCard challenge={challenge} key={challenge.id} />
            ))}
          </ScrollView>
        </View>

        <View>
          <SectionHeader title="Fast Warmups" showSeeAll={false} />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            pagingEnabled
            snapToInterval={110 + Spacing.margin.lg}
            style={{ marginBottom: 20 }}
          >
            {warmUps.map((warmup) => (
              <BestForYou workout={warmup} key={warmup.id} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default explore;
