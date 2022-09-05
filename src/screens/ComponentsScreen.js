import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const name = <Text>Stephen</Text>;
  const greeting = <Text style={styles.secondStyle}>My name is {name}</Text>;
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      {greeting}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  secondStyle: {
    fontSize: 20,
  },
});



export default ComponentsScreen;
