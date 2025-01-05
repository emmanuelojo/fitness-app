import { StyleSheet, View, Image, Platform, SafeAreaView, Text, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import Screen from "@/components/Screen";
import Spacing from "@/constants/Spacing";
import AppText from "@/components/AppText";
import Colors from "@/constants/Colors";

export default function TabTwoScreen() {
  const router = useRouter();

  const goToProfile = () => {
    router.push("/(home)/profile");
  };

  return (
    <Screen>
      <ScrollView
        style={{
          paddingVertical: Spacing.padding.base,
          paddingHorizontal: Spacing.padding.base,
        }}
      >
        <View style={styles.cardsContainer}>
          <Pressable onPress={goToProfile}>
            <View style={styles.card}>
              <View style={styles.wrapper}>
                <View style={styles.iconContainer}>
                  <Ionicons name="person" size={30} color="black" />
                </View>

                <View style={styles.titleContainer}>
                  <AppText style={styles.title}>Profile</AppText>
                  <AppText style={styles.description}>Tap to edit profile</AppText>
                </View>
              </View>

              <Pressable>
                <Ionicons name="chevron-forward" size={20} color={"white"} />
              </Pressable>
            </View>
          </Pressable>

          <View style={styles.card}>
            <View style={styles.wrapper}>
              <View style={styles.iconContainer}>
                <Ionicons name="text" size={30} color="black" />
              </View>

              <View style={styles.titleContainer}>
                <AppText style={styles.title}>Subscription</AppText>
                <AppText style={styles.description}>View all subscriptions</AppText>
              </View>
            </View>

            <Pressable>
              <Ionicons name="chevron-forward" size={20} color={"white"} />
            </Pressable>
          </View>

          <View style={styles.card}>
            <View style={styles.wrapper}>
              <View style={styles.iconContainer}>
                <Ionicons name="book-outline" size={30} color="black" />
              </View>

              <View style={styles.titleContainer}>
                <AppText style={styles.title}>Legal</AppText>
                <AppText style={styles.description}>Learn more about our terms and conditions</AppText>
              </View>
            </View>

            <Pressable>
              <Ionicons name="chevron-forward" size={20} color={"white"} />
            </Pressable>
          </View>

          <Pressable>
            <View style={styles.card}>
              <View style={styles.wrapper}>
                <View style={styles.iconContainer}>
                  <Ionicons name="log-out-outline" size={30} color="black" />
                </View>

                <View style={styles.titleContainer}>
                  <AppText style={styles.title}>Sign out</AppText>
                  <AppText style={styles.description}>Sign out of your account</AppText>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: "column",
    gap: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    paddingHorizontal: 4,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: "100%",
    backgroundColor: "rgba(255,255,255,0.95)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flexDirection: "column",
    gap: 4,
  },
  title: {
    fontWeight: "600",
  },
  description: {
    fontSize: 12,
  },
});