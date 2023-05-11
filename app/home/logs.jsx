import { View, Text, ScrollView, Pressable } from "react-native";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { useRouter } from "expo-router";

export default function logs() {
  const router = useRouter();
  return (
    <View style={tw.style(`flex-1  px-4 bg-white`)}>
      <View style={tw.style(`mt-14`)}>
        <View
          style={tw.style(
            `border-b border-gray-300 justify-between pb-4 flex-row mb-4`
          )}
        >
          <Text style={tw.style(`text-lg font-bold`)}>Logs</Text>
          <AntDesign name="book" size={24} color="black" />
        </View>
        <ScrollView>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
      <Pressable
        onPress={() => router.push("/newLog")}
        style={tw.style(
          `rounded-full p-3 bg-blue-300 absolute bottom-4 right-4`
        )}
      >
        <AntDesign name="plus" size={28} color="white" />
      </Pressable>
    </View>
  );
}

const Card = () => {
  return (
    <View
      style={tw.style(` flex-row p-2 bg-gray-100 rounded my-2 justify-between`)}
    >
      <View style={tw.style(``)}>
        <Text>25-Feb-2023</Text>
        <Text>MFI-17 : 123</Text>
      </View>
      <View style={tw.style(``)}>
        <Text style={tw.style(``)}>Captain</Text>
        <Text style={tw.style(``)}>Co-Pilot</Text>
      </View>
      <View style={tw.style(``)}>
        <Text style={tw.style(``)}>Time in Air</Text>
        <Text style={tw.style(``)}>Mission Type</Text>
      </View>
    </View>
  );
};
