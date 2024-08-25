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
const FormField = ({
  title,
  value,
  handleChangeText,
  placeholder,
  otherStyles,
  ...props
}: FormFieldProps) => {
  const [showpassword, setShowpassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className={`text-base text-gray-100 font-pmedium`}>{title}</Text>
      <View
        className={` bg-black-100 border-2 border-black-200 focus:border-secondary p-3 rounded-lg flex flex-row items-center justify-between border-black-500`}
      >
        <TextInput
          value={value}
          onChangeText={handleChangeText}
          placeholder={placeholder}
          className="text-white font-psemibold flex-1"
          secureTextEntry={title === "Password" && !showpassword}
          {...props}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowpassword(!showpassword)}>
            <Image
              source={showpassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({});
