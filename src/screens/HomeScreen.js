import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";



const HomeScreen = (props) => {
  return <View>
    <Text style={styles.text}>
      Hello world. How are you?
      </Text>
      <Button title="Go to Components Demo" onPress={()=>{props.navigation.navigate("Components");}}/>
      <TouchableOpacity onPress={()=>{console.log("List pressed")}}>
        <Text>
          Go to List Demo
          </Text>
      </TouchableOpacity>
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;


