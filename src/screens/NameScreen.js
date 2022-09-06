import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const TextScreen = () => {
  const [input, setInput] = useState("");

  return (
    <View>
        <Text>Enter Password: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={input}
        onChangeText={(newValue) => setInput(newValue)}
      />
      {input.length>=5?null:<Text>Password must be more than 5 characters</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
