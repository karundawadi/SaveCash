import React from 'react';
import Zutton from '../custom_build/button';
import { ScrollView, StyleSheet, Text, View, TextInput, SafeAreaView, Alert } from 'react-native';
import { useStore , useDispatch } from 'react-redux'; 
import {compareStates} from '../Helper/functions'

function InformationScreen({ navigation } : {navigation : any}) {
    const [firstName, onFirstNameChange] = React.useState("")
    const [lastName, onLastNameChange] = React.useState("")
    const [monthlyIncome, onmonthlyIncome] =  React.useState("")
    const [household,onhouseholdchange] = React.useState("")
    const [education,oneducationChange] = React.useState("")
    const [transportation,ontransportationChange] = React.useState("")
    const [selfBudget, onSelfBudgetChange] = React.useState("")
    const [entertainmentBudget,onEntertainmentBudgetChange] = React.useState("")
    const [utilitiesBudget, onUtlitiesBudgetChange] = React.useState("")

    const store = useStore()
    
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

    // To check if the state is already presnet or not 
    if ((compareStates(store.getState().userDetails,firstState) == true)){
        // This means that state is already present and user has already enetered all the values 
        // Opening HomeScreen
        
        // Navigation makes side effects; if present here without useEffect we have no way of breaking react's functional paradigm 
        // Using useEffect takes to more known version and we are able to make changes as the side effect occurs and this code is rendered
        // TLDR : useEffect makes sure that code with sideeffect navigation.navigate runs
        // Using this does not let change the total reload values in the begining 
        React.useEffect(()=>{
            navigation.navigate("HomePage")
        },[navigation])
    }

    const dispatch = useDispatch()
    return (
    <View style={styles.base}>
        <View style={styles.body}>
            
            {/* Header */}
            <View style={styles.alignThisToTheCenter}>
                <Text style={{fontSize:23, fontWeight:'bold',paddingTop:'2%'}}>Create profile</Text>
                <Text style={{fontSize:15,paddingLeft:'2%'}}>Looks like this is the first time you are using this application</Text>
            </View>
            <View style={{paddingTop:5}}></View>
            
            {/* Form starts here */}
            <ScrollView>          
            <Text style={styles.descriptionText}>Enter your first name and last name</Text>
            <View style={{paddingTop:10}}></View>
            {/* First Name and last name */}
            <View style={styles.inputArea}>
                <SafeAreaView style={{flexDirection:"row",alignContent:"center",justifyContent:'space-evenly'}}>
                    <TextInput style={styles.firstName} value={firstName} onChangeText={onFirstNameChange} placeholder="First Name"/>
                    <Text style={{padding:10,}}></Text>
                    <TextInput style={styles.lastNameNew} value={lastName} onChangeText={onLastNameChange} placeholder="Last Name"/>
                </SafeAreaView>
            </View>

            {/* Monthly Income */}
            <View style={{flexDirection:"row", alignItems:'center', paddingTop:10, paddingLeft:10,paddingRight:10}}>
                <Text style={{paddingRight:10,flex:1}}>Your monthlty income</Text>
                <Text>$</Text>
                <TextInput style={styles.lastName} value={monthlyIncome} onChangeText={onmonthlyIncome} placeholder="0.00" keyboardType="numbers-and-punctuation"></TextInput>
            </View>
            
            {/* Monthly Budget */}
            <Text style={styles.descriptionText}>Let's create your monthly budget :</Text>
            
            {/* Household budget */}
            <View style={{flexDirection:"row", alignItems:'center', paddingTop:10, paddingLeft:10,paddingRight:10}}>
                <Text style={{paddingRight:10,flex:1}}>Household</Text>
                <Text>$</Text>
                <TextInput style={styles.lastName} value={household} onChangeText={onhouseholdchange} placeholder="0.00" keyboardType="numbers-and-punctuation"></TextInput>
            </View>

            {/* Education budget */}
            <View style={{flexDirection:"row", alignItems:'center', paddingTop:10, paddingLeft:10,paddingRight:10}}>
                <Text style={{paddingRight:10,flex:1}}>Education</Text>
                <Text>$</Text>
                <TextInput style={styles.lastName} value={education} onChangeText={oneducationChange} placeholder="0.00" keyboardType="numbers-and-punctuation"></TextInput>
            </View>

            {/* Transportation budget */}
            <View style={{flexDirection:"row", alignItems:'center', paddingTop:10, paddingLeft:10,paddingRight:10}}>
                <Text style={{paddingRight:10,flex:1}}>Transportation</Text>
                <Text>$</Text>
                <TextInput style={styles.lastName} value={transportation} onChangeText={ontransportationChange} placeholder="0.00" keyboardType="numbers-and-punctuation"></TextInput>
            </View>
            
            {/* Self budget */}
            <View style={{flexDirection:"row", alignItems:'center', paddingTop:10, paddingLeft:10,paddingRight:10}}>
                <Text style={{paddingRight:10,flex:1}}>Personal</Text>
                <Text>$</Text>
                <TextInput style={styles.lastName} value={selfBudget} onChangeText={onSelfBudgetChange} placeholder="0.00" keyboardType="numbers-and-punctuation"></TextInput>
            </View>

            {/* Entertainment budget */}
            <View style={{flexDirection:"row", alignItems:'center', paddingTop:10, paddingLeft:10,paddingRight:10}}>
                <Text style={{paddingRight:10,flex:1}}>Entertainment</Text>
                <Text>$</Text>
                <TextInput style={styles.lastName} value={entertainmentBudget} onChangeText={onEntertainmentBudgetChange} placeholder="0.00" keyboardType="numbers-and-punctuation"></TextInput>
            </View>

            {/* Utilties budget */}
            <View style={{flexDirection:"row", alignItems:'center', paddingTop:10, paddingLeft:10,paddingRight:10}}>
                <Text style={{paddingRight:10,flex:1}}>Utilites</Text>
                <Text>$</Text>
                <TextInput style={styles.lastName} value={utilitiesBudget} onChangeText={onUtlitiesBudgetChange} placeholder="0.00" keyboardType="numbers-and-punctuation"></TextInput>
            </View>

            <View style={{paddingTop:15}}></View>

            {/* Custom button; Zutton is created here */}
            <Zutton buttonTapHandler={
                ()=>{
                    // Saving data to AsyncStorage
                    // All the test conditions are kept here 
                    if (firstName.length == 0){
                        Alert.alert("First Name empty")
                    }
                    else if (lastName.length == 0){
                        Alert.alert("Last Name Empty")
                    }
                    else if (monthlyIncome.length == 0){
                        Alert.alert("Monthly income empty")
                    }
                    else if (education.length == 0){
                        Alert.alert("Education field empty")
                    }
                    else if (household.length == 0){
                        Alert.alert("Household field empty")
                    }
                    else if (transportation.length == 0){
                        Alert.alert("Transporation field empty")
                    }
                    else if (entertainmentBudget.length == 0){
                        Alert.alert("Entertainment field empty")
                    }
                    else if (selfBudget.length == 0){
                        Alert.alert("Personal field empty")
                    }
                    else if (utilitiesBudget.length == 0){
                        Alert.alert("Utilites field empty")
                    }
                    // Since numeric key is only supported 
                    else if ((Number(monthlyIncome)<0) || (Number(education) < 0) || (Number(household) < 0) || (Number(transportation)<0) || (Number(entertainmentBudget) < 0) || (Number(selfBudget) < 0) || (Number(utilitiesBudget)<0) ){
                        Alert.alert("Budget cannot be negative")
                    }
                    // Will only show this if the total is less than zero meaning the overall sum is less than estimated budget
                    else if ((Number(monthlyIncome) - Number(education) - Number(transportation) - Number(household) - Number(entertainmentBudget) - Number(selfBudget) - Number(utilitiesBudget)) < 0){
                        Alert.alert("The total amount is more than the budget")
                    // If greater than zero will be stored as savings 
                    }
                    // Adding data to redux store 
                    else{
                        var navigateReady:boolean = false
                        try {
                            dispatch({type:'SET_FIRST_NAME',payload:firstName})
                            dispatch({type:'SET_LAST_NAME',payload:lastName})
                            dispatch({type:'SET_MONTHLY_INCOME',payload:parseFloat(monthlyIncome)})
                            dispatch({type:'SET_HOUSEHOLD_BUDGET',payload:parseFloat(household)})
                            dispatch({type:'SET_ENTERTAINMENT_BUDGET',payload:parseFloat(entertainmentBudget)})
                            dispatch({type:'SET_TRANSPORTATION_BUDGET',payload:parseFloat(transportation)})
                            dispatch({type:'SET_UTILITIES_BUDGET',payload:parseFloat(utilitiesBudget)})
                            dispatch({type:'SET_SELF_BUDGET',payload:parseFloat(selfBudget)})
                            navigateReady = true
                        } catch (error) {
                            Alert.alert("Error Found, Could not Save")
                            navigateReady = false
                        }
                        if (navigateReady){
                            navigation.navigate("HomePage")
                        }
                    }
                }
            } buttonText="Sumbit" styles={{
                height:'auto',
                width:'auto',
                backgroundColor: '#280861',
                justifycontent:'center',
                alignSelf:'center',
                alignItems:'center',
                borderRadius:4
            }} textStyle={{
                color:'white',
            }}></Zutton>
            
            <View style={{paddingBottom:'2%'}}></View>
            </ScrollView>      
        </View>
    </View>
);
}

// Styling is done after this point 
const styles = StyleSheet.create({
    base:{
        backgroundColor:"#A366E8",
        flex:1, // This takes all the available space 
        paddingTop:'10%',
    },
    descriptionText:{
        alignContent:'flex-start',
        justifyContent:'flex-start',
        paddingTop:15,
        paddingLeft:10
    },
    alignThisToTheCenter:{
        alignItems:'center',
    },
    body:{
        width:'100%',
        height:'auto',
        backgroundColor:'white',
    },
    inputArea:{
        alignItems:'flex-start',
        flexDirection:'row',
        paddingLeft:10,
        paddingRight:10,
        width:'100%',
    },
    lastName:{
        flex:1,
        height:28,
        paddingLeft:'1%',
        fontSize:16,
        justifyContent:'flex-start',
        backgroundColor:"#e0dcdc",
        borderRadius:4
    },
    firstName:{
        flex:2,
        height:28,
        fontSize:16,
        paddingLeft:'2%',
        backgroundColor:"#e0dcdc",
        borderRadius:4
    },
    lastNameNew:{
        flex:2,
        height:28,
        paddingLeft:'2%',
        fontSize:16,
        paddingRight:'2%',
        backgroundColor:"#e0dcdc",
        borderRadius:4
    }
});

export default InformationScreen;