import { StyleSheet, Text, View } from "react-native";
import React from "react";

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    creator: { userName, avatar },
  },
}) => {
  return (
    <View className="flex-col items-center pc-4 mb-14">
      <Text className="text-2xl text-white">{title}</Text>
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({});
