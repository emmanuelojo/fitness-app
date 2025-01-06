import { GestureResponderEvent, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Screen from "@/components/Screen";
import AppText from "@/components/AppText";
import IconButton from "@/components/IconButton";
import Spacing from "@/constants/Spacing";
import AccountProfile from "@/components/profile/AccountProfile";
import BottomModal from "@/components/modals/BottomModal";
import Button from "@/components/Button";

const PlaceholderImage = require("@/assets/images/placeholder.png");

const profile = () => {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      onModalClose();
    }
  };

  const goBack = () => {
    router.push("/");
  };

  const handleOpenImageModal = () => {
    setIsModalVisible(true);
  };

  const onModalClose = (e?: GestureResponderEvent) => {
    console.log("target: ", e?.target);
    console.log("curr target: ", e?.currentTarget);

    if (e?.target === e?.currentTarget) {
      console.log("close modal");
      setIsModalVisible(false);
    } else {
      console.log("just close modal");
      setIsModalVisible(false);
    }
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
            alignItems: "center",
            paddingVertical: Spacing.padding.base,
            justifyContent: "center",
          }}
        >
          <IconButton
            onPress={goBack}
            style={{
              position: "absolute",
              left: 0,
            }}
            name="chevron-back"
          />

          <View style={{ flexDirection: "row", alignContent: "center" }}>
            <AppText>Profile </AppText>
          </View>
        </View>

        <View style={{ marginTop: 30 }}>
          <View style={{ flexDirection: "column", gap: 8 }}>
            <AccountProfile imgSource={PlaceholderImage} selectedImage={selectedImage} />
            <Pressable onPress={handleOpenImageModal}>
              <AppText style={{ textAlign: "center", fontSize: 12, textDecorationLine: "underline" }}>
                Tap to edit
              </AppText>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <BottomModal isVisible={isModalVisible} onClose={onModalClose}>
        <View style={styles.buttonsContainer}>
          <Button onPress={pickImageAsync} style={{ alignContent: "center" }}>
            <Ionicons name="image" size={16} style={{ marginRight: 4 }} />
            Choose a photo
          </Button>
          {/* <Button label="Use this photo" /> */}
        </View>
      </BottomModal>
    </Screen>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    height: "100%",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default profile;
