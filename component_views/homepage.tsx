import React from 'react';
import {StyleSheet, View, Text, Alert, Image, TouchableHighlight} from 'react-native';
import CircularButton from '../custom_build/circular_button';
import {Ionicons} from '@expo/vector-icons'
import { useStore, useSelector } from 'react-redux'; 

function HomePage({ navigation } : {navigation : any}){
    const store = useStore()
    console.log(store.getState())
    const total = store.getState().monthlyBalance.totalForMonth + 1

    return (
        <View style={(total > 0)? styles.base : {
            ...styles.base,
            backgroundColor:'red',
        }}>
            <View style={styles.body}>
                <View style={{
                        height:'15%',
                        alignItems:'center',
                        justifyContent:'center',
                        paddingTop:'5%',
                        borderRadius:50,
                    }}>
                    <TouchableHighlight onPress={()=>{
                        navigation.navigate("Financials")
                    }}>
                        <Image style={{
                            height:35,
                            width:35
                        }} source={require('../Icons/profile.gif')} />
                    </TouchableHighlight>
                </View>

                <View style={{height:'70%',alignItems:'center',justifyContent:'center'}}>
                    <Text>You have ${total} remaining</Text>
                </View>

                <View style={{height:'15%',alignItems:'center',justifyContent:'center',paddingBottom:'4%'}}>
                    <TouchableHighlight style={{
                        borderRadius:40,
                    }} onPress={()=>{
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
        backgroundColor:'#AFE1AF',
    },
    body:{
        flex:1,
    }
})



export default HomePage