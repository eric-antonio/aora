import { StyleSheet, Text, View, Image } from "react-native";
import { images } from "../constants";
import { useGlobalContext } from "../context/GlobalProvider";
import CustomButton from "./CustomButton";
import { router } from "expo-router";
interface EmptyStateProps {
  title: string;
  subtitle: string;
}

const EmptyState = ({ title, subtitle }: EmptyStateProps) => {
  const { user } = useGlobalContext();
  return (
    <View className=" justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px] "
        resizeMode="contain"
      />
      <Text className="text-xl text-center font-psemibold mt-2 text-white">
        {title}
      </Text>
      <Text className="font-pmedium text-sm text-gray-100">{subtitle}</Text>
      <CustomButton
        title="Create video "
        handlePress={() => router.push("/create")}
        containerStyles="w-full my-7"
      />
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({});
