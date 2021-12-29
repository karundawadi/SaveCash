import React from 'react';
import { ImageBackground, StatusBar, ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useStore , useDispatch } from 'react-redux'; 
import {compareStates} from '../Helper/functions';

const dollar_image = {uri: "https://openclipart.org/image/800px/325845"};

function LandingPage({ navigation } : {navigation : any}) {
    // This is the state at the begining of the program 
    const firstState = {
        firstName : '',
        lastName : '',
        monthltyIncome : 0.00,
        houseHoldBudget : 0.00,
        entertainmentBudget : 0.00,
        transportationBudget : 0.00,
        utiltiesBudget : 0.00,
        selfBudget : 0.00,
    }
    const store = useStore()

    // To check if the state is already presnet or not 
    if ((compareStates(store.getState().userDetails,firstState) == false)){
        // Use Effect was used here cause the program runs the compareStates condition 
        // Verifies that it is true, then comes here. State of navigation changes
        // Reloads the program, useEffect changes only the navigation  
        React.useEffect(()=>{
            navigation.navigate("HomePage")
        },[navigation])
    }
    return (
        <View style={styles.body}>
            <StatusBar hidden />
            <View style={{
                    ...styles.heading,
                }}>
                    <ImageBackground source={dollar_image}  style={{
                        ...styles.headingView,
                    }}>
                        {/* <Animatable.Text animation="zoomInUp" style={styles.headingText}>Save Cash</Animatable.Text> */}
                    </ImageBackground>
            </View>

            <View style={styles.actualBody}>
                <ScrollView bounces={false}>
                    <Animatable.Text animation="fadeInUp" style={styles.bodyText}>
                        Save Cash is an application that assists you to track your expenses. It does so without compramising 
                        your privacy as all your information is stored in your phone. 
                    </Animatable.Text>
                    
                    <View style={{
                        paddingTop:10
                    }}></View>

                    <Animatable.Text animation="fadeInUp" style={styles.bodyText}>
                        Save Cash does not track any of your bank or purchase history. Since, everything is on your phone
                        this application is your's meaning anything that you put on this application we will have no way of 
                        getting to it. 
                    </Animatable.Text>

                    <View style={{
                        paddingTop:10
                    }}></View>

                    <Animatable.Text animation="fadeInUp" style={styles.bodyText}>
                        That is all you have to know. Click Let's go to get started. 
                    </Animatable.Text>
                </ScrollView>
            </View>

            <TouchableOpacity style={styles.footer} onPress={()=>{
                navigation.navigate("InformationScreen")
            }}>
                <View>
                    <View style={{flex:1}}></View>
                        <View style={styles.footerView}>
                            <Animatable.Text animation="fadeInUpBig" style={styles.footerText}>
                                Let's go
                            </Animatable.Text>
                        </View>
                    <View style={{flex:1}}></View>
                </View>
            </TouchableOpacity>

        </View>
    );
}

// Styling is done after this point 
const styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:'white'
    },
    heading:{
        flex:4,
        paddingTop:'0%',
    },
    headingView:{
        flex:1,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        alignItems:'flex-end',
    },
    headingText:{
        fontSize:40,
        fontWeight:'400',
        color:'purple',
        // backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },
    actualBody:{
        flex:5,
        padding:'3%',
    },
    bodyText:{
        fontSize:20,
        fontWeight:'300'
    },
    footer:{
        flex:1,
        alignContent:'center',
        alignItems:'center',
        backgroundColor:'#ffbb00',
        justifyContent:'center',
    },
    footerView:{

    },
    footerText:{
        fontSize:20,
        fontWeight:'300',
        color:'#9901ff'
    }
});

export default LandingPage;