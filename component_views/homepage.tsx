import React from 'react';
import {StyleSheet, View, Text, Alert, Button, Image, TouchableHighlight} from 'react-native';
import CircularButton from '../custom_build/circular_button';

function HomePage({ navigation } : {navigation : any}){
    var icontext = '../icons/people.png'

    var inst = setInterval(change, 1000);
    var counter = true
    function change() {
        if (counter == true){
            icontext = '../icons/list.png';
        }
        else{
            icontext = '../icons/people.png';
            counter = false;
        }
    }

    return (
        <View style={styles.base}>
            <View style={styles.body}>
                <View style={{height:'15%',alignItems:'center',justifyContent:'center'}}>
                    {/* <CircularButton buttonText="Test" styles={{backgroundColor:'pink'}} textStyle={{}} buttonTapHandler={()=>{
                            Alert.alert("Working")
                    }}>
                    </CircularButton> */}
                    <TouchableHighlight onPress={()=>{Alert.alert("Works!")}}>
                        <Image style={{width:20,height:20}} source={require('../icons/people.png')}></Image>
                    </TouchableHighlight>
                    <Image style={{width:20,height:20}} source={require(icontext)}></Image>
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