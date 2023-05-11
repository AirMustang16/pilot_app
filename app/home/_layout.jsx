import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default function _layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="logs"
        options={{
          tabBarLabel: "Logs",
          tabBarIcon: () => <AntDesign name="book" size={24} color="black" />,
        }}
      />
      {/* <Tabs.Screen name='Index' /> */}
    </Tabs>
  );
}
