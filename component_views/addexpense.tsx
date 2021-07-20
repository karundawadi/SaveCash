import React from 'react';
import {StyleSheet, View, Text, Alert, Image, TouchableHighlight} from 'react-native';
import CircularButton from '../custom_build/circular_button';
import {Ionicons} from '@expo/vector-icons'

function AddExpense({ navigation } : {navigation : any}){
    return (
        <View style={styles.base}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    base:{
        flex:1,
        paddingTop:100,
        backgroundColor:'red'
    }
})

export default AddExpense 