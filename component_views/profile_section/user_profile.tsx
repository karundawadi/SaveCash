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
                    <View style={{...styles.topBarLeft}}>
                        <View style={{
                            flexDirection:'row',
                            alignItems:'center',
                            }}>
                            <Ionicons name="person-circle-outline" color='#ffbb00' size={40}/>
                            <View style={{
                            ...styles.padding2,
                            }}></View>

                            <Switch
                                trackColor={{ false: "white", true: "white" }}
                                thumbColor={isEnabled ? "#00cc00" : "#800000"}
                                ios_backgroundColor="white"
                                style={{
                                    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                                }} 
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                            
                            <View style={styles.padding2}></View>
                            <Ionicons name="stats-chart-outline" color="#ffbb00" size={40}></Ionicons>
                        </View>
                    <View style={styles.padding2}></View>
                </View>

                <View style={styles.topBarRight}>
                    <TouchableHighlight 
                            // style={{
                            //     borderRadius:40,
                            //     alignSelf:'flex-end',
                            //     alignContent:'center',
                            //     backgroundColor:'lightpink'
                            // }} 
                            underlayColor='white'
                            onPress={()=>{
                                navigation.navigate('HomePage')
                            }}>
                                <Text style={{
                                    color:'#ffbb00',
                                    fontSize:16
                                }}>Close</Text>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={styles.padding5}></View>
            {isEnabled ? <FinancialDetails/> : <UserDetails/>}
        </View>
    )
}


const styles = StyleSheet.create({
    base:{
        paddingTop:'8%',
        backgroundColor:'#9901ff',
        flex:1,
        alignItems:'center',
    },
    topBar:{
        flexDirection:'row'
    },
    topBarLeft:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flex:9,
    },
    topBarRight:{
        alignContent:'center',
        alignSelf:'center',
        justifyContent:'flex-end',
        flexDirection:'row',
        flex:2,
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