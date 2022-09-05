import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

    

  const value = 20;

  const setColor = (color, change) => {
    //color === 'red', 'green', 'blue
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red+change);
        return;

      case "blue":
        blue + change > 255 || blue + change < 0 ? null: setBlue(blue+change);
        return;

      case "green":
        green + change > 255 || green + change < 0 ? null : setGreen(green+change);
        return;

        default:
            return;
    }
  };
  return (
    <View>
      <ColorCounter
        onIncrease={() => {
          setColor("red", value);
        }}
        onDecrease={() => {
          setColor("red", -1 * value);
        }}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => {
          setColor("green", value);
        }}
        onDecrease={() => {
          setColor("green", -1*value);
        }}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => {
          setColor("blue", value);
        }}
        onDecrease={() => {
          setColor("blue",-1* value);
        }}
        color="Blue"
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
