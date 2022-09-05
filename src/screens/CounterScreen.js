import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen = () => {
    //todo fix this
    let [count, setCount] = useState(0);

    return <View>
        <Button title="Increase Count" onPress={()=>{setCount(count+1)}}/>
        <Button title="Decrease Count" onPress={()=>{setCount(count-1)}}/>
        <Text>Current Count:{count}</Text>
    </View>
}

const styles = StyleSheet.create({});

export default CounterScreen;