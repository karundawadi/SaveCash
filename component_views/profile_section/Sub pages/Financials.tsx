import React from 'react';
import {StyleSheet, View, Text, Alert, Image, TouchableHighlight, Switch, TextInput} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { useStore , useDispatch } from 'react-redux'; 
import { ScrollView } from 'react-native-gesture-handler';
import { VictoryPie } from "victory-native";

// This screen is for financial details like piechart and others 
// Since different functions are used no longer need to balance the overall count for hooks 
function FinancialDetails(){
    return <View style={styles.financialDetailsStyle}>
        <ScrollView>
            <Text style={{backgroundColor:'white'}} >
                Test Financial 
            </Text>
            <VictoryPie
                colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
                data={[
                    { x: "Cats", y: 35 },
                    { x: "Dogs", y: 40 },
                    { x: "Birds", y: 55 },
                    { x: "Sigma", y: 50},
                ]} 
            />
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    financialDetailsStyle :{
        flex:1,
        width:'100%',
        backgroundColor:'pink'
    }
})

export default FinancialDetails