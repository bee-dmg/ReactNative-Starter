import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
const reducer = (state, action) =>{

    switch(action.type){
        case "increase":
            return {...state, counter: state.counter + action.payload};
        case "decrease":
            return{...state, counter: state.counter - action.payload};
        case "reset":
            return {...state, counter:0};
            default:
            return state;
    }
};


const CounterScreen = () => {
    //todo fix this

   const [state, dispatch] = useReducer(reducer, { counter:0 });
    return <View>
        <Button title="Increase Count" onPress={()=>dispatch({type:"increase", payload:1})}/>
        <Button title="Decrease Count" onPress={()=>dispatch({type:"decrease", payload:1})}/>
        <Button title="Reset Count" onPress={()=>dispatch({type:"reset", payload:1})}/>
        <Text>Current Count:{state.counter}</Text>
    </View>
}

const styles = StyleSheet.create({});

export default CounterScreen;