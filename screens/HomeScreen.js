import { View, TextInput, Button, SafeAreaView, Text, Image, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SafeAreaAndroid from "../components/helpers/SafeAreaAndroid";
// import { ChevronDownIcon } from 'react-native-heroicons/outline'

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={SafeAreaAndroid.AndroidSafeArea}>
        <View className="flex flex-row items-center pb-3 mx-4 space-x-2">
            <Image
            source={{
                uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            <View>
                <Text className=" font-bold text-gray-400 text-sm">Deliver Now!</Text>
                <Text className=" font-bold text-xl">Current Location </Text>
            </View>
        </View>
    </SafeAreaView>
  );
}