import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

const TextScreen = () => {

    const [input, setInput] = useState("");

    return <View><TextInput style={styles.input} autoCapitalize="none" autoCorrect={false} />
    <Text>{input}</Text></View>
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth:1
    }
});

export default TextScreen;