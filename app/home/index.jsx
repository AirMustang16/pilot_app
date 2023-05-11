import { Pressable, StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "react-native";
import { useRouter } from "expo-router";

export default function index() {
  const router = useRouter();
  return (
    <View style={tw.style(`flex-1  px-4 bg-white`)}>
      <View style={tw.style(`mt-14`)}>
        <View
          style={tw.style(
            `border-b border-gray-300 justify-between pb-4 flex-row`
          )}
        >
          <Text style={tw.style(`text-lg font-bold`)}>Dashboard</Text>
          <Pressable onPress={() => router.replace("/")}>
            <AntDesign name="poweroff" size={24} color="black" />
          </Pressable>
        </View>

        <View style={tw.style(`mt-4`)}>
          <View
            style={tw.style(` flex-row justify-between items-center pb-5 `)}
          >
            <View style={tw.style(``)}>
              <View></View>
              <Text style={tw.style(`text-xl font-bold`)}>Ahmed Hashmi</Text>
              <Text style={tw.style(`text-base font-bold`)}>
                AC 1 -- Status
              </Text>
              <Text style={tw.style(`text-base font-bold`)}>
                AC 2 -- Status
              </Text>
              <Text style={tw.style(`text-base font-bold`)}>
                AC 3 -- Status
              </Text>
            </View>

            <Image
              style={tw.style(` w-20 h-20 rounded-full`)}
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
            />
          </View>

          <View>
            <Text style={tw.style(`text-base`)}>Total Hours : 523</Text>
            <Text style={tw.style(`text-base`)}>Fixed Wing Hours : 23</Text>
            <Text style={tw.style(`text-base`)}>Rotary Wing Hours : 163</Text>
          </View>

          <View style={tw.style(`flex-1 justify-between items-center mt-15`)}>
            <View style={tw.style(`w-62 h-62 rounded-full bg-blue-500`)}></View>
          </View>
        </View>
      </View>
    </View>
  );
}
