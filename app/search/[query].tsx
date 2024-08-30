import React, { useEffect, useState } from "react";
import { images } from "../../constants";
import SearchInput from "@/components/SearchInput";
import Trending from "@/components/trending";
import EmptyState from "@/components/EmptyState";
import VideoCard from "@/components/VideoCard";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FlatList,
  Image,
  RefreshControl,
  Alert,
  View,
  Text,
} from "react-native";
import useAppwrite from "../../lib/UseAppwrite";
import { useLocalSearchParams } from "expo-router";
import { searchPosts } from "@/lib/appwrite";
interface Document {
  id: number;
  title: string;
}

const Search = () => {
  const { query } = useLocalSearchParams();
  const { data: posts, refetch } = useAppwrite(searchPosts(query));

  useEffect(() => {
    refetch();
  }, [query]);

  return (
    <SafeAreaView className="bg-primary w-full h-full">
      <FlatList
        data={posts}
        key="2"
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View className="flex-1">
                <Text className="font-pmedium text-sm text-gray-100">
                  Search Results
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  {query}
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
              title="Search "
              value={""}
              placeholder="Search for a video Topic"
              handleChangeText={function (e: string): void {
                throw new Error("Function not implemented.");
              }}
            />
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No videos found"
            subtitle="Be the first one to UpLoad "
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Search;
