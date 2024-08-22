import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
type TrendingPosts = {
  posts: { id: string }[];
};

const Trending = ({ posts }: TrendingPosts) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => <Text className="text-white">{item.id}</Text>}
      horizontal
    />
  );
};

export default Trending;

const styles = StyleSheet.create({});
