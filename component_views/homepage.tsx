import React from 'react';
import {StyleSheet, View, Text, Alert, Button} from 'react-native';
import CircularButton from '../custom_build/circular_button';

function HomePage({ navigation } : {navigation : any}){
    return (
        <View style={styles.base}>
            <View style={styles.body}>
                <View style={{height:'15%',alignItems:'center',justifyContent:'center'}}>
                    <CircularButton buttonText=":______:" styles={{backgroundColor:'pink'}} textStyle={{}} buttonTapHandler={()=>{
                            Alert.alert("Working")
                    }}>

                    </CircularButton>
                </View>
                <View style={{backgroundColor:'pink',height:'70%',alignItems:'center',justifyContent:'center'}}>
                    <Text>You have this much remaining.</Text>
                </View>
                <View style={{height:'15%',alignItems:'center',justifyContent:'center',paddingBottom:'4%'}}>
                    <CircularButton buttonText="+" styles={{
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
                    }} ></CircularButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    base:{
        backgroundColor:'white',
        flex:1,
    },
    body:{
        flex:1,
    }
})



export default HomePage