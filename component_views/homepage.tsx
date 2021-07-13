import React from 'react';
import {StyleSheet, View, Text, Alert, Button} from 'react-native';
import CircularButton from '../custom_build/circular_button';

function HomePage({ navigation } : {navigation : any}){
    return (
        <View style={styles.base}>
            <View style={styles.body}>
                {/* Aavatar view at the top of the page */}
                <View style={{flex:3}}>
                    <CircularButton styles={{
                        width:80,
                        borderRadius:8,
                    }}buttonTapHandler={()=>{
                        Alert.alert("Hello")
                    }} buttonText="Hello" textStyle={{color:'white'}}/>  
                    <View style={{flex:6}}></View>
                </View>

                {/* Text view at the middle of the page */}
                <View style={{flex:2}}>
                    <Text>
                        You have $ ___ remaining in your account
                    </Text>
                </View>
                
                {/* Add expense button view at the buttom of the page */}
                <View style={{flex:2}}>
                    <CircularButton styles={{
                        width:80,
                        borderRadius:8,
                    }}buttonTapHandler={()=>{
                        Alert.alert("Hello")
                    }} buttonText="Hello" textStyle={{color:'white'}}/>  
                    <View style={{flex:6}}></View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    base:{
        flex:1,
        backgroundColor:'lightgreen',
        paddingTop:30,
        alignItems:'center',
    },
    body:{
        flexDirection: 'column',
        alignItems:'center',

    }
})



export default HomePage