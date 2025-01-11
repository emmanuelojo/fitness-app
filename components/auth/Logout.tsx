import { View, StyleSheet, Pressable } from "react-native";
import AppText from "../AppText";
import Button from "../Button";
import { LogoutBigIcon } from "@/assets/icons/LogoutBigIcon";

interface Props {
  onClose: () => void;
  logout: () => void;
}

const Logout = ({ onClose, logout }: Props) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <LogoutBigIcon outerColour="#ffffff" />
      </View>

      <View style={{ width: 220, flexDirection: "column", gap: 4 }}>
        <AppText style={{ textAlign: "center", color: "white" }}>Sign out</AppText>
        <AppText style={{ fontSize: 12, textAlign: "center", color: "white" }}>
          Are you sure you want to log out?
        </AppText>
      </View>

      <View style={{ width: 220, flexDirection: "column", gap: 12 }}>
        <Button onPress={onClose}>No</Button>

        <Pressable onPress={logout}>
          <View
            style={{
              width: "100%",
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#686868",
              borderRadius: 8,
            }}
          >
            <AppText style={{ color: "#686868", textAlign: "center", fontSize: 16 }}>Yes</AppText>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
    paddingVertical: 20,
  },
});

export default Logout;
