import React from 'react';
import {StyleSheet, View, Text, TextInput, Alert, Image, TouchableHighlight} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

function AddExpense({ navigation } : {navigation : any}){
    const [expenseName, onExpenseNameChange] = React.useState("")
    return (
        <View style={styles.base}>
            <View style={styles.form}>
                {/* Expense Name */}
                <Text style={styles.textForm}>Your monthlty income</Text>
                <View style={{flexDirection:"column", paddingTop:10, paddingLeft:10,paddingRight:10}}>
                    <TextInput style={styles.inputField} value={expenseName} onChangeText={onExpenseNameChange} placeholder="Enter your expense" keyboardType="default"></TextInput>
                </View>
                
                {/* Expense Name */}
                <Text style={styles.textForm}>Your monthlty income</Text>
                <View style={{flexDirection:"column", paddingTop:10, paddingLeft:10,paddingRight:10}}>
                    <TextInput style={styles.inputField} value={expenseName} onChangeText={onExpenseNameChange} placeholder="Enter your expense" keyboardType="default"></TextInput>
                </View>

                {/* Expense Name */}
                <Text style={styles.textForm}>Your monthlty income</Text>
                <View style={{flexDirection:"column", paddingTop:10, paddingLeft:10,paddingRight:10}}>
                    <TextInput style={styles.inputField} value={expenseName} onChangeText={onExpenseNameChange} placeholder="Enter your expense" keyboardType="default"></TextInput>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    base:{
        flex:1,
        paddingTop:10,
    },
    form:{
        paddingLeft:10,
    },
    inputField:{
        height:28,
        paddingLeft:'1%',
        fontSize:16,
        justifyContent:'flex-start',
        backgroundColor:"#e0dcdc",
        borderRadius:4
    },
    textForm:{
        paddingLeft:10
    }
})

export default AddExpense 