import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child 1</Text>
        <Text style={styles.textTwoStyle}>Child 2</Text>
        <Text style={styles.textThreeStyle}>Child 3</Text>
    </View>
};
const styles = StyleSheet.create({

    viewStyle:{
        borderWidth:3,
        borderColor:'black',
        
        height:200,
        alignItems:'center',
        justifyContent:'center'
    },
    textOneStyle:{
        borderWidth:3,
        borderColor:'red',
    
    },
    textTwoStyle:{
        borderWidth:3,
        borderColor:'red',
        alignSelf:'stretch',
        ...StyleSheet.absoluteFillObject // sets left:0, top:0, right:0, bottom:0 and position to absolute
    },
    textThreeStyle:{
        borderWidth:3,
        borderColor:'red',
    },
});
export default BoxScreen;