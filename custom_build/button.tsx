import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function Zutton(props:any) {
    return (
        // Making sure additional values can be passed when Zutton is called 
        <TouchableHighlight onPress={props.buttonTapHandler} style={{...styles.buttonStyle,...props.styles}}>
            <Text style={{...styles.textStyle,...props.textStyle}}>{props.buttonText}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    buttonStyle:{
        flex:1,
        alignSelf:'center',
        borderRadius:8,
        paddingVertical:10,
        paddingHorizontal:10,
        alignItems:'center',
        shadowColor:'#2a2a2a',
        shadowRadius:4,
        shadowOffset: {
            width:0,
            height:2,
        },
        elevation:2,
    },
    textStyle:{
        fontWeight:'bold',
        flex:1,
        textAlign:'center',
    }
})