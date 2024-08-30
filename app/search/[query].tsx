import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Search = () => {
  const { query } = useLocalSearchParams();
  return (
    <View>
      <Text className=" bg-primary w-full h-full text-3xl text-white">
        {query}
      </Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
