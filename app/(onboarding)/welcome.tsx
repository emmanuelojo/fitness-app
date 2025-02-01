import { StyleSheet, Image, View, Text, TouchableOpacity, Pressable, Animated, Dimensions } from "react-native";
import Screen from "@/components/Screen";
import Spacing from "@/constants/Spacing";
import FontSize from "@/constants/FontSize";
import Font from "@/constants/Font";
import { Link, router } from "expo-router";
import { useState, useEffect, useRef } from "react";

const WelcomeImage = require("@/assets/images/onboarding/1.png");
const OverlayImage = require("@/assets/images/onboarding/overlay.png");

const welcome = () => {
  const animation = useRef(new Animated.Value(0)).current; // Initial value is 0

  const { height } = Dimensions.get("window");

  const handleGetStarted = () => {
    router.push("/(onboarding)/login");
  };

  useEffect(() => {
    // Animate the width from 0 to 100% of the container over 5 seconds
    Animated.timing(animation, {
      toValue: 1, // 1 means 100% width
      duration: 5000, // 5 seconds
      useNativeDriver: false, // Since we are animating width, not transform
    }).start();
  }, []);

  return (
    <Screen>
      <View style={styles.container}>
        <Image
          source={WelcomeImage}
          style={{
            width: "100%",
            height: height < 800 ? "50%" : "67%",
          }}
        />

        <Image source={OverlayImage} style={styles.overlayImage} />

        <View
          style={{
            flexDirection: "column",
            gap: 10,
            justifyContent: "space-between",
            backgroundColor: "#ffffff",
            width: "100%",
            height: height < 800 ? "50%" : "33%",
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 24,
            paddingTop: 24,
          }}
        >
          <View style={styles.ctaTextContainer}>
            <Text style={styles.title}>Wherever you are health is number one</Text>
            <Text style={styles.description}>There is no instant way to healthy life</Text>

            <View style={styles.loadingBarWrapper}>
              <Animated.View
                style={[
                  styles.loadingBar,
                  { width: animation.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }) },
                ]}
              />
            </View>
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
    // width: "100%",
    // height:  "67%",
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
    // flexDirection: "column",
    // gap: 10,
    // justifyContent: "space-between",
    // backgroundColor: "#ffffff",
    // width: "100%",
    // height: "33%",
    // paddingLeft: 20,
    // paddingRight: 20,
    // paddingBottom: 24,
    // paddingTop: 24,
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
  loadingBarWrapper: {
    marginTop: 40,
    marginHorizontal: "auto",
    width: 65,
    height: 5,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#192126",
    paddingHorizontal: 2,
  },
  loadingBar: {
    height: 3,
    borderRadius: 5,
    backgroundColor: "#BBF246",
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
