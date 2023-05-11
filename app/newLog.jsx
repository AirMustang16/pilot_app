import { View, Text, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { TextInput, Checkbox, RadioButton } from "react-native-paper";
import { useRouter } from "expo-router";

export default function newLog() {
  const [checked, setChecked] = React.useState("first");
  const router = useRouter();
  return (
    <View style={tw.style(`flex-1  px-4 bg-white`)}>
      <View style={tw.style(`mt-14 flex-1`)}>
        <View
          style={tw.style(
            `border-b border-gray-300 justify-between pb-4 flex-row`
          )}
        >
          <Text style={tw.style(`text-lg font-bold`)}>New Log</Text>
        </View>

        <View style={tw.style(`flex-1 mt-6`)}>
          <TextInput mode="outlined" label="Date" />
          <TextInput mode="outlined" label="Aircraft Type" />
          <TextInput mode="outlined" label="Tail Number" />
          <TextInput mode="outlined" label="Captain" />
          <TextInput mode="outlined" label="Co-Pilot" />
          {/* <Checkbox.Item label="Day" status="checked" /> */}

          <View style={tw.style(`flex-1`)}>
            <View style={tw.style(`flex-row items-center`)}>
              <Text>Day</Text>
              <RadioButton
                value="first"
                status={checked === "first" ? "checked" : "unchecked"}
                onPress={() => setChecked("first")}
              />
            </View>
            <View style={tw.style(`flex-row items-center`)}>
              <Text>Night</Text>
              <RadioButton
                value="second"
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => setChecked("second")}
              />
            </View>
          </View>
        </View>
        <Pressable
          onPress={() => router.replace("/home/logs")}
          style={tw.style(
            `bg-blue-300 p-2 w-full rounded-lg my-3 items-center mb-10`
          )}
        >
          <Text style={tw.style(``)}>Save</Text>
        </Pressable>
      </View>
    </View>
  );
}
