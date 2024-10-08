import {
  FlatList,
  Text,
  View,
  Image,
  RefreshControl,

} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import Search from "../search/[query]";
import SearchInput from "@/components/SearchInput";
import Trending from "@/components/trending";
import { useGlobalContext } from "@/context/GlobalProvider";
import EmptyState from "@/components/EmptyState";
import { getAllPosts, getLatestPosts } from "@/lib/appwrite";
import useAppwrite from "../../lib/UseAppwrite";
import VideoCard from "@/components/VideoCard";
interface Document {
  id: number;
  title: string;
}

const Home = () => {
  const { data: posts, refetch } = useAppwrite(getAllPosts);
  const { data: latestPosts } = useAppwrite(getLatestPosts);

  const { user } = useGlobalContext();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

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
                  Welcome Back Sr
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  {" "}
                  {user && user.name.toLocaleUpperCase()}
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
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100 font-pregular text-lg mb-3">
                Latest Videos{" "}
              </Text>
              <Trending posts={latestPosts ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No videos found"
            subtitle="Be the first one to UpLoad "
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
