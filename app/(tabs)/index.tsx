import { Image, ScrollView, StyleSheet, TextInput, View } from "react-native";
import { useRouter } from "expo-router";
import { categories, user, workoutPlans, workouts } from "@/data";
import Colors from "@/constants/Colors";
import Font from "@/constants/Font";
import FontSize from "@/constants/FontSize";
import AppText from "@/components/AppText";
import Spacing from "@/constants/Spacing";
import { Ionicons } from "@expo/vector-icons";
import Screen from "@/components/Screen";
import IconButton from "@/components/IconButton";
import CategoryList from "@/components/CategoryList";
import SectionHeader from "@/components/SectionHeader";
import Workout from "@/components/Workout";
import WorkOutPlan from "@/components/WorkOutPlan";

export default function HomeScreen() {
  const router = useRouter();

  const viewDetails = (id: number) => {
    router.push(`/exercises/${id}`);
  };

  return (
    <Screen>
      <ScrollView
        style={{
          paddingHorizontal: Spacing.padding.base,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={user.profile}
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
              }}
            />
            <View
              style={{
                marginLeft: Spacing.margin.base,
              }}
            >
              <AppText>Hello, Welcome</AppText>
              <AppText
                style={{
                  fontFamily: Font["poppins-semiBold"],
                  textTransform: "capitalize",
                }}
              >
                {user.name}
              </AppText>
            </View>
          </View>
          <IconButton name="notifications" />
        </View>

        <View
          style={{
            backgroundColor: Colors.primary,
            paddingVertical: Spacing.padding.sm,
            paddingHorizontal: Spacing.padding.base,
            borderRadius: Spacing.borderRadius.base,
            marginVertical: Spacing.margin.xl,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Ionicons name="search-outline" size={24} color={Colors.text} />
          <TextInput
            placeholder="Search Workouts.."
            placeholderTextColor={Colors.text}
            style={{
              fontSize: FontSize.base,
              width: "80%",
              outline: "none",
            }}
          />
          <IconButton
            name="options-outline"
            style={{
              backgroundColor: Colors.accent,
            }}
            color={Colors.black}
          />
        </View>
        <CategoryList />
        <SectionHeader title="Featured Workouts" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          pagingEnabled
          snapToInterval={270 + Spacing.margin.lg}
        >
          {workouts.map((workout) => (
            <Workout onPress={viewDetails} workout={workout} key={workout.id} />
          ))}
        </ScrollView>
        <SectionHeader title="Trending Plans" />
        {workoutPlans.map((plan) => (
          <WorkOutPlan plan={plan} key={plan.id} />
        ))}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  divider: {
    height: 5,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profile: {
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: "100px",
  },
  inputField: {
    height: 40,
    borderWidth: 1,
    borderColor: "#94a3b8",
    borderRadius: "12px",
    paddingHorizontal: 8,
  },
  popularDestinations: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
  },
  viewAll: {
    color: "#3b82f6",
  },
  destinations: {
    marginTop: 10,
    width: "100%",
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    overflow: "hidden",
    overflowX: "scroll",
    // scrollbar hide
  },
  destinationTab: {
    backgroundColor: "#000000",
    width: "auto",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginHorizontal: 5,
    marginTop: 5,
  },
  destinationTabText: {
    color: "white",
    cursor: "pointer",
  },
  destination: {
    height: 384,
    width: 240,
    backgroundColor: "#d1d5db",
    marginRight: 12,
    marginTop: 12,
    borderRadius: 12,
    position: "relative",
  },
  destinationImage: {
    height: "100%",
    width: "100%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    zIndex: 10,
  },
  destinationTextContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#00000055",
    zIndex: 11,
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  destinationCountry: {
    fontWeight: "600",
    fontSize: 18,
    marginTop: 8,
    color: "#ffffff",
  },
  destinationContinentContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  destinationContinent: {
    color: "#ffffff",
  },
});
