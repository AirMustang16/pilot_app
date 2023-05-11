import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";

import { Pressable } from "react-native";
import { useRouter } from "expo-router";
import { TextInput } from "react-native-paper";

export default function Page() {
  const router = useRouter();
  return (
    <View style={tw.style(`flex-1 mt-10 mx-6 justify-center items-center`)}>
      <Text style={tw.style(`text-2xl`)}>Pilot LogBook</Text>
      <View style={tw.style(` w-full  rounded-lg`)}>
        <TextInput mode="outlined" label="Username" />
      </View>
      <View style={tw.style(` w-full rounded-lg`)}>
        <TextInput mode="outlined" label="Password" />
      </View>

      <Pressable
        onPress={() => router.push("/home")}
        style={tw.style(
          `bg-blue-300 p-4 w-full rounded-lg my-3 mt-10 items-center`
        )}
      >
        <Text style={tw.style(`text-lg font-bold text-white`)}> Login</Text>
      </Pressable>
    </View>
  );
}
