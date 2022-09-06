import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const nav = navigation.navigate;
  return (
    <View>
      <Text style={styles.text}>Hello world. How are you?</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => {
          nav("Components");
        }}
      />
      <Button
        title="Go to List Demo"
        onPress={() => {
          nav("List");
        }}
      />
       <Button
        title="Go to Image Demo"
        onPress={() => {
          nav("Image");
        }}
      />
       <Button
        title="Go to Counter Demo"
        onPress={() => {
          nav("Counter");
        }}
      />
      <Button
        title="Add a Color"
        onPress={() => {
          nav("Color");
        }}
      />
      <Button
        title="Add a Square"
        onPress={() => {
          nav("Square");
        }}
      />
        <Button
        title="Add Some Text"
        onPress={() => {
          nav("Text");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
