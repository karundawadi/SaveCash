import React from 'react';
import {StyleSheet, View, Text, Alert, Image, TouchableHighlight, Switch, TextInput, DevSettings} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { useStore , useDispatch } from 'react-redux'; 
import { ScrollView } from 'react-native-gesture-handler';
import * as Updates from 'expo-updates';

// First screen set here 
function UserDetails(){
    const [firstName, onFirstNameChange] = React.useState("")
    const [lastName, onLastNameChange] = React.useState("")
    const [monthlyIncome, onMonthlyIncomeChange] = React.useState("")
    const [household,onhouseholdchange] = React.useState("")
    const [education,oneducationChange] = React.useState("")
    const [transportation,ontransportationChange] = React.useState("")
    const [selfBudget, onSelfBudgetChange] = React.useState("")
    const [entertainmentBudget,onEntertainmentBudgetChange] = React.useState("")
    const [utilitiesBudget, onUtlitiesBudgetChange] = React.useState("")
    const [editPressed, onEditPressed] = React.useState(false)
    const store = useStore()
    const dispatch = useDispatch()


    const state_val = () => {
        onFirstNameChange(store.getState().userDetails.firstName)
        onLastNameChange(store.getState().userDetails.lastName)
        onMonthlyIncomeChange(String(store.getState().userDetails.monthltyIncome))
        onhouseholdchange(String(store.getState().userDetails.houseHoldBudget))
        oneducationChange(String(store.getState().userDetails.educationBudget))
        ontransportationChange(String(store.getState().userDetails.transportationBudget))
        onSelfBudgetChange(String(store.getState().userDetails.selfBudget))
        onEntertainmentBudgetChange(String(store.getState().userDetails.entertainmentBudget))
        onUtlitiesBudgetChange(String(store.getState().userDetails.utiltiesBudget))
    }
    // // Will call only on the first run 
    if (firstName == ""){
        state_val()
    }

    console.log(store.getState().userDetails.firstName)
    return <View style={{...styles.userDetailsStyle}}>
        <View style={{
        }}>
            <View style={{
                flexDirection:'row',
            }}>
                <View style={{
                    flex:5,
                    paddingLeft:'2%'
                }}>
                    <TouchableHighlight 
                            style={{
                                borderRadius:40,
                                alignSelf:'flex-start'
                            }} 
                            underlayColor='white'
                            onPress={()=>{
                                onEditPressed(true)
                            }}>
                            <Text style={{
                                fontSize:16,
                                paddingLeft:'2%',
                                color:'blue'
                            }}>Edit</Text>
                    </TouchableHighlight>
                </View>

                <View style={{
                    flex:5,
                    paddingRight:'2%',
                }}>
                    <TouchableHighlight 
                            style={{
                                borderRadius:40,
                                alignSelf:'flex-end'
                            }} 
                            underlayColor='white'
                            onPress={()=>{
                                try {
                                    if (editPressed === false){
                                        Alert.alert(
                                            'Delete account?',
                                            'This will delete all your account details. You will lose all data from this application',
                                            [
                                                { text: "Cancel", style: 'cancel', onPress: () => {} },
                                                {
                                                    text: 'Procceed',
                                                    style: 'destructive',
                                                    onPress: () => {
                                                        // Resetting all the data 
                                                        // Since our reducer needs an payload or something similar in action 
                                                        dispatch({type:'PURGE_USER_DETAILS',payload:{}})
                                                        dispatch({type:'PURGE_MONTHLY',payload:{}})
                                                        dispatch({type:'PURGE_OVERALL_BALANCE',payload:{}})
                                                        dispatch({type:'PURGE_TRANSACTIONS',payload:{}})
                                                        Updates.reloadAsync()
                                                    },
                                                },
                                            ]
                                        )
                                    }
                                    else{
                                        onEditPressed(false)
                                        Alert.alert(
                                            'Update details?',
                                            'This will default your monthly budget and also delete the expenses till this month.',
                                            [
                                                { text: "Cancel", style: 'cancel', onPress: () => {} },
                                                {
                                                    text: 'Procceed',
                                                    style: 'destructive',
                                                    onPress: () => {
                                                        // Setting for the first time 
                                                        dispatch({type:'SET_FIRST_NAME',payload:firstName})
                                                        dispatch({type:'SET_LAST_NAME',payload:lastName})
                                                        dispatch({type:'SET_MONTHLY_INCOME',payload:parseFloat(monthlyIncome)})
                                                        dispatch({type:'SET_HOUSEHOLD_BUDGET',payload:parseFloat(household)})
                                                        dispatch({type:'SET_ENTERTAINMENT_BUDGET',payload:parseFloat(entertainmentBudget)})
                                                        dispatch({type:'SET_TRANSPORTATION_BUDGET',payload:parseFloat(transportation)})
                                                        dispatch({type:'SET_UTILITIES_BUDGET',payload:parseFloat(utilitiesBudget)})
                                                        dispatch({type:'SET_SELF_BUDGET',payload:parseFloat(selfBudget)})
                                                        
                                                        // Setting to the monthly store 
                                                        dispatch({type:'SET_TOTAL_FOR_MONTH',payload:parseFloat(monthlyIncome)})
                                                        dispatch({type:'SET_HOUSEHOLD_FOR_MONTH',payload:parseFloat(household)})
                                                        dispatch({type:'SET_ENTERTAINMENT_FOR_MONTH',payload:parseFloat(entertainmentBudget)})
                                                        dispatch({type:'SET_TRANSPORTATION_FOR_MONTH',payload:parseFloat(transportation)})
                                                        dispatch({type:'SET_UTILITIES_FOR_MONTH',payload:parseFloat(utilitiesBudget)})
                                                        dispatch({type:'SET_SELF_FOR_MONTH',payload:parseFloat(selfBudget)})
                                                    },
                                                },
                                            ]
                                        )
                                    }
                                } catch (error) {
                                    Alert.alert("Error Found, Could not Save")
                                }
                            }}>
                            <Text style={{
                                fontSize:16,
                                paddingLeft:'2%',
                                color:'blue'
                            }}>{editPressed? "Done": "Delete"}</Text>
                    </TouchableHighlight>
                </View>
            </View>

            <ScrollView style={{
            }}>
                <Text style={{
                    paddingLeft:'2%',
                    paddingRight:'2%',
                    paddingTop:'2%',
                    fontSize:16
                }}>
                    Name:
                </Text>
                {/* This contains the name  */}
                <View style={{
                        flexDirection:'row',
                        paddingLeft:'2%',
                        paddingRight:'2%',
                        paddingTop:'1.5%',
                    }}>
                        <TextInput style = {editPressed? {backgroundColor:'white',flex:3, fontSize: 16} : {backgroundColor:'lightgrey',flex:3 , fontSize: 16}} value={firstName} editable={editPressed} onChangeText={onFirstNameChange} placeholder='First Name'></TextInput>

                        <View style={{flex:0.5,}}></View>

                        <TextInput style = {editPressed? {backgroundColor:'white',flex:3, fontSize: 16} : {backgroundColor:'lightgrey',flex:3, fontSize: 16}} value={lastName} editable={editPressed} onChangeText={onLastNameChange} placeholder='Last Name'></TextInput>
                </View>
                
                <View style={{
                    paddingLeft:'2%',
                    paddingRight:'2%',
                }}>
                    <Text >Your monthly income</Text>
                    <TextInput style = {editPressed? styles.textEdit : styles.textDone} value={monthlyIncome} editable={editPressed} onChangeText={onMonthlyIncomeChange}></TextInput>
                </View>
                
                <View style={{
                    paddingLeft:'2%',
                    paddingRight:'2%',
                }}>
                    <Text>Your household budget</Text>
                    <TextInput style = {editPressed? styles.textEdit : styles.textDone}  value={household} editable={editPressed} onChangeText={onhouseholdchange}></TextInput>
                </View>

                <View style={{
                    paddingLeft:'2%',
                    paddingRight:'2%',
                }}>
                    <Text>Your education budget</Text>
                    <TextInput style = {editPressed? styles.textEdit : styles.textDone} value = {education} editable={editPressed} onChangeText={oneducationChange}></TextInput>
                </View>

                <View style={{
                    paddingLeft:'2%',
                    paddingRight:'2%',
                }}>
                    <Text>Your transportation budget</Text>
                    <TextInput style = {editPressed? styles.textEdit : styles.textDone}  value={transportation} editable={editPressed} onChangeText={ontransportationChange}></TextInput>
                </View>

                <View style={{
                    paddingLeft:'2%',
                    paddingRight:'2%',
                }}>
                    <Text>Your selfbudget budget</Text>
                    <TextInput style = {editPressed? styles.textEdit : styles.textDone}  value={selfBudget} editable={editPressed} onChangeText={onSelfBudgetChange}></TextInput>
                </View>

                <View style={{
                    paddingLeft:'2%',
                    paddingRight:'2%',
                }}>
                    <Text>Your entertainment Budget</Text>
                    <TextInput style = {editPressed? styles.textEdit : styles.textDone}  value={entertainmentBudget} editable={editPressed} onChangeText={onEntertainmentBudgetChange}></TextInput>
                </View>

                <View style={{
                    paddingLeft:'2%',
                    paddingRight:'2%',
                }}>
                    <Text>Your utilities Budget</Text>
                    <TextInput style = {editPressed? styles.textEdit : styles.textDone}  value={utilitiesBudget} editable={editPressed} onChangeText={onUtlitiesBudgetChange}></TextInput>
                </View>
            </ScrollView>
        </View>
    </View>
}

const styles = StyleSheet.create({
    // These are the bases of each component 
    userDetailsStyle : {
        flex:1,
        width:'100%',
        backgroundColor:'pink'
    },
    financialDetailsStyle :{
        flex:1,
        width:'100%',
        backgroundColor:'pink'
    },
    textEdit:{
        backgroundColor:'white',
        fontSize:16
    },
    textDone:{
        backgroundColor:'lightgrey',
        fontSize:16
    }
})

export default UserDetails