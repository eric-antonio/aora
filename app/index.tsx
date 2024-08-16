import { Text, View } from "react-native";
import { Link } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default  function App ()  {
  return (
    <View className="flex-1 items-center justify-center bg-white">
    <StatusBar style="auto" />
    <Text>Open up App.js to start working on your app!</Text>
    <Link href="/home">Go to Home</Link>
  </View>
  );
};
