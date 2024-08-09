import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";

const RootLayOut = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Header</Text>
        <Slot />
        <Text>Footer</Text>
      </View>
    </>
  );
};

export default RootLayOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
