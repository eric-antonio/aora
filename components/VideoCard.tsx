import { StyleSheet, Text, View, Image } from "react-native";
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
      <View className="flex-row gap-3 items-start">
        <View className="justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] border rounded-lg border-secondary justify-center items-center p-0.5">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
      <Text className="text-2xl text-white">{title}</Text>
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({});
