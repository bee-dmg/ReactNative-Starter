import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <View>
    <Text style={styles.text}>
      Hello world. How are you?
      </Text>
      <Button title="Components">Components</Button>
      <Button title="List">List</Button>
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;


