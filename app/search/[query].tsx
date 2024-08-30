import React, { useEffect } from "react";
import SearchInput from "@/components/SearchInput";
import EmptyState from "@/components/EmptyState";
import VideoCard from "@/components/VideoCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import useAppwrite from "../../lib/UseAppwrite";
import { useLocalSearchParams } from "expo-router";
import { searchPosts } from "@/lib/appwrite";
interface Document {
  id: number;
  title: string;
}

const Search = () => {
  const { query } = useLocalSearchParams();
  const { data: posts, refetch } = useAppwrite(() => searchPosts(query));

  useEffect(() => {
    refetch();
  }, [query]);
  console.log(query, posts);

  return (
    <SafeAreaView className="bg-primary w-full h-full">
      <StatusBar style="light" backgroundColor="#161622" />
      <FlatList
        data={posts}
        key="2"
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-4">
            <Text className="font-pmedium text-sm text-gray-100">
              Search Results
            </Text>
            <Text className="text-2xl font-psemibold text-white">{query}</Text>
            <View className="mt-6 mb-8">
              <SearchInput initialQuery={query.toString()} />
            </View>
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

export default Search;
