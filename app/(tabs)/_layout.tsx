import { Tabs } from "expo-router";
import React from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import { TabBar } from "@/components/tabs/TabBar";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
