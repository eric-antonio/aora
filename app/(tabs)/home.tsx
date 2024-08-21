import { FlatList, Text, View } from "react-native";
import React from "react";
import {
  SafeAreaFrameContext,
  SafeAreaView,
} from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="bg-primary w-full h-full">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text className="text-3xl text-white">{item.id}</Text>}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View className="flex-1">
                <Text className="font-pmedium text-sm text-gray-100">Welcome Back Sr Eric</Text>
                <Text className="text-2xl font-psemibold text-white"> Eric Antonio</Text>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
