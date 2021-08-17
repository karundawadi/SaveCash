import React from 'react';
import {StyleSheet, View, Text, Alert, Image, TouchableHighlight, Switch, TextInput, Pressable} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { useStore , useDispatch } from 'react-redux'; 
import { ScrollView } from 'react-native-gesture-handler';
import {ProgressChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import ActivityRings from "react-native-activity-rings";

// This is to generate random color in rgba 
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

// This screen is for financial details like piechart and others 
// Since different functions are used no longer need to balance the overall count for hooks 
function FinancialDetails(){

    // This is the data that will be taken from the application itself 
    const data = [ 
        {
            label: "ACTIVITY",
            value: 0.8, // ring will use color from theme
            color:'#F22B1B'
        },
        {
            label: "ACTIVITY",
            value: 0.6,
            color:'#1264F3'
        },
        {
            label: "RINGS",
            value: 0.2,
            color:'#33F198'
        },
        {
            label: "ACTIVITY",
            value: 0.8, // ring will use color from theme
            color:'#E9F71D'
        },
        {
            label: "ACTIVITY",
            value: 0.6,
            color:'#EF11F9'
        },
        {
            label: "RINGS",
            value: 0.2,
            color:'#11F9F9'
        }
    ]

    // This is for making the product reactiver 
    const screenWidth = Dimensions.get("screen")
    const height = Dimensions.get("screen")

    // Chart Configs
    const chartConfig = { 
        width: 150,  
        height: 150
    }
        
    return <View style={styles.financialDetailsStyle}>
        <ScrollView>
            {/* This is for the summary expense */}
            <Text
                style={{
                    ...styles.padding2,
                    ...styles.fontDetails
                }}
                >
                    Expenses so far</Text>
            <View style={{
                ...styles.tableFormat,
                ...styles.padding2,
                paddingTop:'2%',
                alignItems:'flex-start',
                justifyContent:'flex-start'
            }}>
                <Text style={{
                    ...styles.fontDetails,
                    flex:1
                }}>1</Text>

                <Text style={{
                    ...styles.fontDetails,
                    flex:1
                }}>2</Text>

                <Text style={{
                    ...styles.fontDetails,
                    flex:1
                }}>1</Text>

                <Text style={{
                    ...styles.fontDetails,
                    flex:1
                }}>2</Text>
            </View>
            
            {/* This is for the action bars expense */}
            <View style={{
                ...styles.padding2,
                ...styles.backgroundTheme
            }}>
                <Text style={{
                    ...styles.fontDetails
                }}>
                    Vizualized Data
                </Text>
                
                <View style={{
                    backgroundColor:'white',
                }}>
                    <ActivityRings theme={'light'} legend={true} data={data} config={chartConfig} /> 
                </View>
            </View>

                    
            {/* This is for all the expenses */}
            {/* Planning to implements button here */}
            <View style={
                {
                    backgroundColor:'white',
                    flex:1
                }
            }>
                <Text>This is where the modal's will appear</Text>
            </View>

        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    padding2:{
        paddingLeft:'2%',
    },
    fontDetails:{
        fontSize:16
    },
    backgroundTheme:{
        backgroundColor:'lightgreen',
    },
    tableFormat:{
        backgroundColor:'white',
        flexDirection:'row',

    },
    financialDetailsStyle :{
        flex:1,
        width:'100%',
        backgroundColor:'pink'
    }
})

export default FinancialDetails