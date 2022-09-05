import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    {
      key: "1",
      age:22,
      name: "Friend #1",
    },
    {
      key: "2",
      age:52,
      name: "Friend #2",
    },
    {
      key: "3",
      age:33,
      name: "Friend #3",
    },
    {
      key: "4",
      age:12,
      name: "Friend #4",
    },
    {
      key: "5",
      age:55,
      name: "Friend #5",
    },
    {
      key: "6",
      age:82,
      name: "Friend #6",
    },
    {
      key: "7",
      age:28,
      name: "Friend #7",
    },
    {
      key: "8",
      age:45,
      name: "Friend #8",
    },
    {
      key: "9",
      age:48,
      name: "Friend #9",
    },
    {
      key: "10",
      age:33,
      name: "Friend #10",
    },
  ];

  return (
    <FlatList
      data={friends}
      keyExtractor={friend => friend.name}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
