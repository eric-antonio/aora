import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { icons, images } from "@/constants";
import CustomButton from "./CustomButton";
interface FormFieldProps {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: (e: string) => void;
  otherStyles?: string;
}

const SearchInput = ({
  title,
  value,
  handleChangeText,
  placeholder,
  otherStyles,
  ...props
}: FormFieldProps) => {
  const [showpassword, setShowpassword] = useState(false);
  return (
    <View className="border-2 border-black-200 w-full h-16 bg-black-100 rounded-2xl focus:border-secondary items-center  space-x-4 flex-row ">
      <TextInput
        value={value}
        onChangeText={handleChangeText}
        placeholder={placeholder}
        placeholderTextColor={"#fff"}
        className="text-white text-base  mt-0.5   flex-1"
        secureTextEntry={title === "Password" && !showpassword}
        {...props}
      />
      <TouchableOpacity>
        <Image
          source={icons.search}
          className="w-5 h-5 mr-3"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
