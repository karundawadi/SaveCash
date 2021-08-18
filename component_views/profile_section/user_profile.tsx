import React from 'react';
import {StyleSheet, View, Text, Alert, Image, TouchableHighlight, Switch, TextInput} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import UserDetails from './Sub pages/user_details';
import FinancialDetails from './Sub pages/Financials';

// Basically false is Userprofile and true is financials 
function UserProfile({ navigation } : {navigation : any}){
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.base}>
            <View style={styles.topBar}>
                    <View style={styles.topBarLeft}>
                        <Ionicons name="person-circle-outline" color='black' size={40}/>
                            <View style={styles.padding2}></View>
                                <Switch
                                    trackColor={{ false: "white", true: "pink" }}
                                    thumbColor={isEnabled ? "beige" : "lightgreen"}
                                    ios_backgroundColor="#3e3e3e"
                                    style={{
                                        transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                                        alignSelf:'center'
                                    }} 
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            <View style={styles.padding2}></View>
                        <Ionicons name="stats-chart-outline" color="black" size={40}></Ionicons>
                    <View style={styles.padding2}></View>
                </View>

                <View style={styles.topBarRight}>
                    <TouchableHighlight 
                            style={{
                                borderRadius:40,
                                alignSelf:'flex-end',
                                alignContent:'center',
                                backgroundColor:'lightpink'
                            }} 
                            underlayColor='green'
                            onPress={()=>{
                                navigation.navigate('HomePage')
                            }}>
                                <Ionicons name="close-outline" color='red' size={30}/>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={styles.padding5}></View>
            {isEnabled? <FinancialDetails/> : <UserDetails/>}
        </View>
    )
}


const styles = StyleSheet.create({
    base:{
        paddingTop:'8%',
        backgroundColor:'white',
        flex:1,
        alignItems:'center',
    },
    topBar:{
        flexDirection:'row'
    },
    topBarLeft:{
        flexDirection:'row',
        justifyContent:'center',
        flex:9,
    },
    topBarRight:{
        alignContent:'flex-end',
        justifyContent:'flex-end',
        flexDirection:'row',
        flex:1,
        paddingRight:'2%',
    },
    padding2:{
        padding:'2%'
    },
    padding5:{
        paddingTop:'5%'
    },
})


export default UserProfile 