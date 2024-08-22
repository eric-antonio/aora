import { FlatList, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import Search from "../search/[query]";
import SearchInput from "@/components/SearchInput";
import Trending from "@/components/trending";
import { useGlobalContext } from "@/context/GlobalProvider";

const Home = () => {
  const { user } = useGlobalContext();

  console.log(user)

  return (
    <SafeAreaView className="bg-primary w-full h-full">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text className="text-3xl text-white">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View className="flex-1">
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back Sr
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  {" "}
                  { user && (user.name).toLocaleUpperCase() }
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchInput
              title={"Search "}
              value={""}
              placeholder={"Search for a video Topic"}
              handleChangeText={function (e: string): void {
                throw new Error("Function not implemented.");
              }}
            />
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100 font-pregular text-lg mb-3">
                Latest Videos{" "}
              </Text>
              <Trending />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
