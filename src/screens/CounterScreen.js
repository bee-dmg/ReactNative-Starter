import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen = () => {
    let count = 0;
    return <View>
        <Button title="Increase Count"  onPress={()=>{count++;}}/>
        <Button title="Decrease Count" onPress={()=>{count--;}}/>
        <Text>Current Count:{count}</Text>
    </View>
}

const styles = StyleSheet.create({});

export default CounterScreen;