import React from 'react';
import {StyleSheet, View, Text, Alert, Image, TouchableHighlight} from 'react-native';
import CircularButton from '../custom_build/circular_button';
import {Ionicons} from '@expo/vector-icons'
import { useStore , useDispatch } from 'react-redux'; 

function HomePage({ navigation } : {navigation : any}){
    const store = useStore()
    console.log(store.getState().userDetails)
    return (
        <View style={styles.base}>
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
                    <Text>You have this much remaining.</Text>
                </View>

                <View style={{height:'15%',alignItems:'center',justifyContent:'center',paddingBottom:'4%'}}>
                    <TouchableHighlight style={{
                        borderRadius:40,
                    }} onPress={()=>{
                            navigation.navigate("AddExpense")
                        }}>
                        <Ionicons name="md-add-circle" size={40}/>
                    </TouchableHighlight>
                    {/* <CircularButton buttonText="+" styles={{
                        borderWidth:1,
                        borderColor:'rgba(0,0,0,0.2)',
                        alignItems:'center',
                        justifyContent:'center',
                        width:50,
                        height:50,
                        backgroundColor:'lightgreen',
                        borderRadius:50,
                    }} textStyle={{}} buttonTapHandler={()=>{
                            Alert.alert("Working")
                    }} ></CircularButton> */}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    base:{
        backgroundColor:'#AFE1AF',
        flex:1,
    },
    body:{
        flex:1,
    }
})



export default HomePage