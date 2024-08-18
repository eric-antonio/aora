import { StyleSheet, Text, View, ScrollView, Image, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { useState } from "react";
import { createUser } from "../../lib/appwrite";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      console.log('Attempting to create user...');
      const result = await createUser(form.email, form.password, form.username);
      console.log('User created successfully:', result);
      router.replace("/home");
    } catch (error) {
      console.error('Error creating user:', error);
      Alert.alert("Error", "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode="contain"
          />
          <Text className="text-white  text-semibold font-psemibold text-3xl mt-5">
            Sign up to Aora
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-7 "
            placeholder="Enter your username"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7 "
            placeholder="Enter your email"
          />

          <FormField
            title="Password"
            value={form.password}
            placeholder="Enter your password"
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles={`mt-7 `}
          />
          <CustomButton
            title="Sign Up"
            handlePress={submitForm}
            containerStyles={`mt-7`}
            isLoading={isSubmitting}
          />
          <View className="flex-row justify-center pt-5 mt-5 gap-2">
            <Text className="text-white font-pregular text-sm">
              Have an account already?
            </Text>

            <Link href="/sign-in">
              <Text className="text-secondary-200 font-psemibold text-sm">
                Sign In
              </Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
// com.eric.aora
export default SignUp;

const styles = StyleSheet.create({});
