import React from 'react';
import {StyleSheet, View, Text, Alert, Image, TouchableHighlight} from 'react-native';
import CircularButton from '../custom_build/circular_button';
import {Ionicons} from '@expo/vector-icons'
import { useStore, useSelector } from 'react-redux'; 
import { useNavigation } from '@react-navigation/native';


function HomePage(){
    const store = useStore()
    const navigation = useNavigation()
    const [total,updateTotal] = React.useState(store.getState().monthlyBalance.totalForMonth.toFixed(2))
    store.subscribe(()=>{
        updateTotal(store.getState().monthlyBalance.totalForMonth.toFixed(2))
    })
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
                    <TouchableHighlight 
                        style={{
                            borderRadius:45,
                        }} 
                        underlayColor='white' 
                        onPress={()=>{
                        navigation.navigate("Financials")
                        }}>
                            <Ionicons name="create-outline" size={40}/>
                    </TouchableHighlight>
                </View>

                <View style={{height:'70%',alignItems:'center',justifyContent:'center'}}>
                    {
                        total > 0 ? <Text>You have ${total} remaining</Text> : <Text>You have -${total*(-1)} remaining</Text>
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
        backgroundColor:'#AFE1AF',
    },
    body:{
        flex:1,
    }
})



export default HomePage