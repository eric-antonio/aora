import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { icons } from "@/constants";

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    creator: { userName, avatar },
  },
}) => {
  const [playing, setPlaying] = React.useState(false);
  return (
    <View className="flex-col items-center px-4 mb-14">
      <View className="flex-row gap-3 items-start">
        <View className="justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] border rounded-lg border-secondary justify-center items-center  p-0.5">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>
          <View className="justify-center flex-1 ml-3 gap-y-1 ">
            <Text
              className="text-white font-psemibold text-sm"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className="text-xs text-gray-100 font-pregular"
              numberOfLines={1}
            >
              {userName}fdgf
            </Text>
          </View>
        </View>
        <View className="pt-2 mr-1">
          <Image
            source={icons.menu}
            className="w-5 h-5 "
            resizeMode="contain"
          />
        </View>
      </View>
      {
        playing ? (
          <Text>Ola</Text>
        ) : (
          <TouchableOpacity  activeOpacity={0.7} onPress={()=> setPlaying(true)} className="w-full h-60 rounded-xl relative justify-center items-center ">
            <Image
              source={{ uri: thumbnail }}
              className="w-full h-full rounded-xl mt-3"
              resizeMode="cover"
            />

            <Image source={icons.play} className="w-12 h-12 absolute" resizeMode="contain" />

            
          </TouchableOpacity>
        )
      }
    </View>
  );
};

export default VideoCard;


