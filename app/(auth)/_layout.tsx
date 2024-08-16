import React from "react";
import { StatusBar } from "expo-status-bar";
import {  StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";

const AuthLayOut = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
            title: "Sign In",
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
            title: "Sign Up",
          }}
        />
      </Stack>
      <StatusBar style="light" backgroundColor="#161622" />
    </>
  );
};

export default AuthLayOut;

const styles = StyleSheet.create({});
