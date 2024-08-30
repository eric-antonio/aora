import React, { useEffect } from "react";
import SearchInput from "@/components/SearchInput";
import EmptyState from "@/components/EmptyState";
import VideoCard from "@/components/VideoCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, View, Text, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import useAppwrite from "../../lib/UseAppwrite";
import { getUserPosts } from "@/lib/appwrite";
import { useGlobalContext } from "@/context/GlobalProvider";
import { icons } from "@/constants";
interface Document {
  id: number;
  title: string;
}

const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const { data: posts } = useAppwrite(() => getUserPosts(user.$id));
console.log(user)
  const logOut = () => {};
  return (
    <SafeAreaView className="bg-primary w-full h-full">
      <FlatList
        data={posts}
        key="2"
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="w-full justify-center items-center mt-6 px-4 mb-12">
            <TouchableOpacity
              className="w-full items-end mb-10"
              onPress={logOut}
            >
              <Image
                source={icons.logout}
                resizeMode="contain"
                className="w-6 h-6"
              />
            </TouchableOpacity>
            <View className="w-16 h-16 border border-secondary justify-center items-center rounded-lg">
              <Image
                source={{ uri: user?.avatar }}
                resizeMode="cover"
                className="w-[90%] h-[90%] rounded-lg"
              />
            </View>
            <Text className="text-white font-psemibold text-xl mt-4">
              {user?.name}
            </Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No videos found"
            subtitle="No videos found for this search query"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
