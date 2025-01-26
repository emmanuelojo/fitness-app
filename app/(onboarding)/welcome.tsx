import { StyleSheet, Image, View, Text, TouchableOpacity, Pressable } from "react-native";
import Screen from "@/components/Screen";
import Spacing from "@/constants/Spacing";
import FontSize from "@/constants/FontSize";
import Font from "@/constants/Font";
import { Link, router } from "expo-router";

const WelcomeImage = require("@/assets/images/onboarding/1.png");
const OverlayImage = require("@/assets/images/onboarding/overlay.png");

const welcome = () => {
  const handleGetStarted = () => {
    router.push("/");
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Image source={WelcomeImage} style={styles.image} />

        <Image source={OverlayImage} style={styles.overlayImage} />

        <View style={styles.ctaContainer}>
          <View style={styles.ctaTextContainer}>
            <Text style={styles.title}>Wherever you are health is number one</Text>
            <Text style={styles.description}>There is no instant way to healthy life</Text>
          </View>

          {/* <Link href="/"> */}
          <Pressable onPress={handleGetStarted}>
            <View style={styles.button}>
              <Text
                style={[
                  {
                    fontSize: FontSize.base,
                    fontFamily: Font["poppins-regular"],
                    color: "white",
                  },
                ]}
              >
                Get started
              </Text>
            </View>
          </Pressable>
          {/* </Link> */}
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "67%",
  },
  overlayImage: {
    width: "100%",
    height: 190,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-20%)",
  },
  ctaContainer: {
    flexDirection: "column",
    gap: 10,
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    width: "100%",
    height: "33%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 24,
    paddingTop: 24,
  },
  ctaTextContainer: {
    width: "100%",
    flexDirection: "column",
    gap: 24,
  },
  title: {
    width: 270,
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    color: "#192126",
    fontWeight: "900",
    fontSize: 24,
    textTransform: "capitalize",
  },
  description: {
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    color: "rgba(25,33,38,0.5)",
    fontWeight: "400",
    fontSize: 15,
  },
  button: {
    width: "100%",
    height: 56,
    backgroundColor: "#192126",
    borderRadius: 32,
    paddingHorizontal: Spacing.padding.xl,
    paddingVertical: Spacing.padding.base,
    alignItems: "center",
  },
});

export default welcome;
