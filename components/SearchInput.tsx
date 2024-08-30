import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from "react-native";
import { icons, images } from "@/constants";
import { router, usePathname } from "expo-router";

const SearchInput = () => {
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  return (
    <View className="border-2 border-black-200 w-full h-16 bg-black-100 rounded-2xl focus:border-secondary items-center  space-x-4 flex-row  ">
      <TextInput
        value={query}
        onChangeText={(e) => setQuery(e)}
        placeholder="Search for a a video topic"
        placeholderTextColor={"#CDCDE0"}
        className="text-white text-base ml-3  mt-0.5   flex-1"
      />
      <TouchableOpacity
        onPress={() => {
          if (!query) {
            return Alert.alert(
              "Missing query",
              "Please  input something to search results across the dataBase "
            );
          }

          if (pathname.startsWith("/search/")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <Image
          source={icons.search}
          className="w-5 h-5 mr-3"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
