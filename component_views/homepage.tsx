import React from 'react';
import {StyleSheet, View, Text, Alert, Image, TouchableHighlight} from 'react-native';
import CircularButton from '../custom_build/circular_button';
import {Ionicons} from '@expo/vector-icons'
import { useStore, useSelector } from 'react-redux'; 
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

function HomePage(){
    const store = useStore()
    const navigation = useNavigation()
    const [total,updateTotal] = React.useState(store.getState().monthlyBalance.totalForMonth.toFixed(2))
    const date = new Date()
    store.subscribe(()=>{
        updateTotal(store.getState().monthlyBalance.totalForMonth.toFixed(2))
    })
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return (
        <View style={(total > 0)? styles.base : {
            ...styles.base,
            backgroundColor:'#ffbeb5',
        }}>
            <View style={styles.body}>
                <View style={{
                        height:'15%',
                        alignItems:'center',
                        justifyContent:'center',
                        paddingTop:'5%',
                        borderRadius:50,
                    }}>
                    <TouchableHighlight 
                        style={{
                            borderRadius:45,
                        }} 
                        underlayColor='white' 
                        onPress={()=>{
                        navigation.navigate("UserProfile")
                        }}>
                            <Ionicons name="create-outline" size={40}/>
                    </TouchableHighlight>
                </View>

                <View style={{height:'70%',alignItems:'center',justifyContent:'center'}}>
                    {
                        total > 0 ? <Animatable.Text animation="wobble" style={{...styles.textStyle}}>${total} remaining for {month[date.getMonth()]}.</Animatable.Text> : <Animatable.Text animation="tada" style={{...styles.textStyle}}>-${total*(-1)} remaining for {month[date.getMonth()]}.</Animatable.Text>
                    }
                </View>

                <View style={{height:'15%',alignItems:'center',justifyContent:'center',paddingBottom:'4%'}}>
                    <TouchableHighlight 
                        style={{
                        borderRadius:40,
                        }} 
                        underlayColor='white'
                        onPress={()=>{
                            navigation.navigate("AddExpense")
                        }}>
                        <Ionicons name="md-add-circle" size={40}/>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    base:{
        flex:1,
        backgroundColor:'#bbf2c1',
    },
    body:{
        flex:1,
    },
    textStyle:{
        color:'#333232',
        fontSize:20,
        fontWeight:'300'
    }
})



export default HomePage