import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import useCounter from "./useCounter";

export default function App() {
  const [counter, increment, decrement, reset] = useCounter();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.Text}>Counter: {counter}</Text>
      <View style={styles.Buttons}>
        <Button title="Increment" onPress={increment} />
        <Button title="Decrement" onPress={decrement} />
        <Button title="Reset" onPress={reset} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  Buttons: {
    width: "100%",
    flexDirection: "row",
  },
  Text: {
    width: "100%",
    fontSize: 24,
    marginBottom: 15,

    justifyContent: "flex-start",
  },
});
