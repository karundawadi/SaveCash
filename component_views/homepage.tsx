import React from 'react';
import {StyleSheet, View, Text, Alert, Button, Image, TouchableHighlight} from 'react-native';
import CircularButton from '../custom_build/circular_button';
import {Ionicons} from '@expo/vector-icons'

function HomePage({ navigation } : {navigation : any}){
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
                    <TouchableHighlight onPress={()=>{Alert.alert("Works!")}}>
                        <Image style={{
                            height:35,
                            width:35
                        }} source={require('../Icons/profile.gif')} />
                    </TouchableHighlight>
                </View>

                <View style={{backgroundColor:'pink',height:'70%',alignItems:'center',justifyContent:'center'}}>
                    <Text>You have this much remaining.</Text>
                </View>

                <View style={{height:'15%',alignItems:'center',justifyContent:'center',paddingBottom:'4%'}}>
                    <TouchableHighlight style={{
                        borderRadius:40,
                    }} onPress={()=>{Alert.alert("Add expense works!")}}>
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
        backgroundColor:'white',
        flex:1,
    },
    body:{
        flex:1,
    }
})



export default HomePage