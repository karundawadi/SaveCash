import React from 'react';
import Zutton from '../custom_build/button';
import { ScrollView, StyleSheet, Text, View, TextInput, SafeAreaView, Alert, KeyboardAvoidingView, Platform } from 'react-native';
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
    const [hideKeyboard, onKeyBoardHideChange] = React.useState(false)
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
    if ((compareStates(store.getState().userDetails,firstState) == false)){
        // Use Effect was used here cause the program runs the compareStates condition 
        // Verifies that it is true, then comes here. State of navigation changes
        // Reloads the program, useEffect changes only the navigation  
        React.useEffect(()=>{
            navigation.navigate("HomePage")
        },[navigation])
    }
    const dispatch = useDispatch()
    return (
            <KeyboardAvoidingView enabled={hideKeyboard}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex:1}}
            >
                <View style={styles.base}>
                    <View style={styles.body}>

                        {/* Form starts here */}
                        <ScrollView bounces={false}>        

                            {/* Header */}
                            <View style={styles.alignThisToTheCenter}>
                                <Text style={{fontSize:23, fontWeight:'bold',paddingTop:'2%'}}>Create profile</Text>
                                <Text style={{fontSize:15,paddingLeft:'2%'}}>Looks like this is the first time you are using this application</Text>
                            </View>

                            <View style={{...styles.paddingTop2}}></View>  
                            
                            <Text style={styles.descriptionText}>Enter your first name and last name</Text>

                            <View style={{...styles.paddingTop2,flex:1}}></View>

                            {/* First Name and last name */}
                            <View style={styles.inputArea}>
                                <SafeAreaView style={{flexDirection:"row",alignContent:"center",justifyContent:'space-evenly'}}>
                                    <TextInput onFocus={()=>onKeyBoardHideChange(false)} style={styles.firstName} value={firstName} onChangeText={onFirstNameChange} placeholder="First Name"/>
                                    <Text style={{padding:10,}}></Text>
                                    <TextInput onFocus={()=>onKeyBoardHideChange(false)} style={styles.lastNameNew} value={lastName} onChangeText={onLastNameChange} placeholder="Last Name"/>
                                </SafeAreaView>
                            </View>

                            {/* Monthly Income */}
                            <View style={{...styles.flexadd,...styles.commonCharacterstics}}>
                                <Text style={{paddingRight:10,flex:1}}>Your monthlty income</Text>
                                <Text style={{...styles.dollarSign}} >$</Text>
                                <TextInput keyboardType="numeric" onFocus={()=>onKeyBoardHideChange(false)} style={styles.lastName} value={monthlyIncome} onChangeText={onmonthlyIncome} placeholder="0.00" keyboardType="numbers-and-punctuation"></TextInput>
                            </View>
                            
                            {/* Monthly Budget */}
                            <Text style={styles.descriptionText}>Let's create your monthly budget :</Text>
                            
                            {/* Household budget */}
                            <View style={{...styles.commonCharacterstics}}>
                                <Text style={{paddingRight:10,flex:1}}>Household</Text>
                                <Text style={{...styles.dollarSign}} >$</Text>
                                <TextInput keyboardType="numeric" onFocus={()=>onKeyBoardHideChange(true)} style={styles.lastName} value={household} onChangeText={onhouseholdchange} placeholder="0.00" keyboardType="numbers-and-punctuation"></TextInput>
                            </View>

                            {/* Education budget */}
                            <View style={{...styles.commonCharacterstics}}>
                                <Text style={{paddingRight:10,flex:1}}>Education</Text>
                                <Text style={{...styles.dollarSign}} >$</Text>
                                <TextInput keyboardType="numeric" onFocus={()=>onKeyBoardHideChange(true)} style={styles.lastName} value={education} onChangeText={oneducationChange} placeholder="0.00" keyboardType="numbers-and-punctuation"></TextInput>
                            </View>

                            {/* Transportation budget */}
                            <View style={{...styles.commonCharacterstics}}>
                                <Text style={{paddingRight:10,flex:1}}>Transportation</Text>
                                <Text style={{...styles.dollarSign}} >$</Text>
                                <TextInput keyboardType="numeric" onFocus={()=>onKeyBoardHideChange(true)} style={styles.lastName} value={transportation} onChangeText={ontransportationChange} placeholder="0.00" keyboardType="numbers-and-punctuation"></TextInput>
                            </View>
                            
                            {/* Self budget */}
                            <View style={{...styles.commonCharacterstics}}>
                                <Text style={{paddingRight:10,flex:1}}>Personal</Text>
                                <Text style={{...styles.dollarSign}} >$</Text>
                                <TextInput keyboardType="numeric" onFocus={()=>onKeyBoardHideChange(true)} style={styles.lastName} value={selfBudget} onChangeText={onSelfBudgetChange} placeholder="0.00" keyboardType="numbers-and-punctuation"></TextInput>
                            </View>

                            {/* Entertainment budget */}
                            <View style={{...styles.commonCharacterstics}}>
                                <Text style={{paddingRight:10,flex:1}}>Entertainment</Text>
                                <Text style={{...styles.dollarSign}} >$</Text>
                                <TextInput keyboardType="numeric" onFocus={()=>onKeyBoardHideChange(true)} style={styles.lastName} value={entertainmentBudget} onChangeText={onEntertainmentBudgetChange} placeholder="0.00" keyboardType="numbers-and-punctuation"></TextInput>
                            </View>

                            {/* Utilties budget */}
                            <View style={{...styles.commonCharacterstics}}>
                                <Text style={{paddingRight:10,flex:1}}>Utilites</Text>
                                <Text style={{...styles.dollarSign}} >$</Text>
                                <TextInput keyboardType="numeric" onFocus={()=>onKeyBoardHideChange(true)} style={styles.lastName} value={utilitiesBudget} onChangeText={onUtlitiesBudgetChange} placeholder="0.00" keyboardType="numbers-and-punctuation"></TextInput>
                            </View>

                            <View style={{...styles.paddingTop2}}></View>

                            {/* Custom button; Zutton is created here */}
                            <Zutton buttonTapHandler={
                                ()=>{
                                    // Saving data to AsyncStorage
                                    // All the test conditions are kept here 
                                    if (firstName.length == 0){
                                        Alert.alert(
                                            "First Name Empty",
                                            "It looks like the first name field is empty. Please fill out the first name field.",
                                            [
                                                { text: "OK", onPress: () => {} }                                              
                                            ]
                                        )
                                    }
                                    else if (lastName.length == 0){
                                        Alert.alert(
                                            "Last Name Empty",
                                            "It looks like the last name field is empty. Please fill out the last name field.",
                                            [
                                                { text: "OK", onPress: () => {} }                                              
                                            ]
                                        )
                                    }
                                    else if (monthlyIncome.length == 0){
                                        Alert.alert(
                                            "Monthly Income Empty",
                                            "It looks like the montly income is empty. Please fill out the montly income field.",
                                            [
                                                { text: "OK", onPress: () => {} },                                    
                                                { text:'Make Zero', onPress : () => {onmonthlyIncome("0")}, style:'destructive'},         
                                            ]
                                        )
                                    }
                                    else if (education.length == 0){
                                        Alert.alert(
                                            "Education Empty",
                                            "It looks like the education field empty. Please fill out the education field.",
                                            [
                                                { text: "OK", onPress: () => {} },                                               
                                                { text:'Make Zero', onPress : () => {oneducationChange("0")}, style:'destructive'},         
                                            ]
                                        )
                                    }
                                    else if (household.length == 0){
                                        Alert.alert(
                                            "Household Empty",
                                            "It looks like the household field empty. Please fill out the household field.",
                                            [
                                                { text: "OK", onPress: () => {} },  
                                                { text:'Make Zero', onPress : () => {onhouseholdchange("0")}, style:'destructive'},         
                                            ]
                                        )
                                    }
                                    else if (transportation.length == 0){
                                        Alert.alert(
                                            "Transportation Empty",
                                            "It looks like the transportation field empty. Please fill out the transporation field.",
                                            [
                                                { text: "OK", onPress: () => {} },                                               
                                                { text:'Make Zero', onPress : () => {ontransportationChange("0")}, style:'destructive'},         
                                            ]
                                        )
                                    }
                                    else if (entertainmentBudget.length == 0){
                                        Alert.alert(
                                            "Entertainment Empty",
                                            "It looks like the entertainment field empty. Please fill out the entertainment field.",
                                            [
                                                { text: "OK", onPress: () => {} },                                           
                                                { text:'Make Zero', onPress : () => {onEntertainmentBudgetChange("0")}, style:'destructive'},         
                                            ]
                                        )
                                    }
                                    else if (selfBudget.length == 0){
                                        Alert.alert(
                                            "Personal field Empty",
                                            "It looks like the personal field empty. Please fill out the personal field.",
                                            [
                                                { text: "OK", onPress: () => {} }, 
                                                { text:'Make Zero', onPress : () => {onSelfBudgetChange("0")}, style:'destructive'},         
                                            ]
                                        )
                                    }
                                    else if (utilitiesBudget.length == 0){
                                        Alert.alert(
                                            "Utilites field Empty",
                                            "It looks like the utilities field empty. Please fill out the utilities field.",
                                            [
                                                { text: "OK", onPress: () => {} }, 
                                                { text:'Make Zero', onPress : () => {onUtlitiesBudgetChange("0")}, style:'destructive'},                                                        
                                            ]
                                        )
                                    }

                                    // This is to check if all the numbers entered are numeric 
                                    else if ((isNaN(Number(monthlyIncome))) || (isNaN(Number(education))) || (isNaN(Number(household))) || (isNaN(Number(transportation))) || (isNaN(Number(entertainmentBudget))) || ( isNaN(Number(entertainmentBudget))) || ( isNaN(Number(utilitiesBudget))) ){
                                        console.log("Numeric field detected")
                                        Alert.alert(
                                            "Letter detected in numeric field",
                                        )
                                    // If greater than zero will be stored as savings 
                                    }

                                    // Since numeric key is only supported 
                                    else if ((Number(monthlyIncome)<0) || (Number(education) < 0) || (Number(household) < 0) || (Number(transportation)<0) || (Number(entertainmentBudget) < 0) || (Number(selfBudget) < 0) || (Number(utilitiesBudget)<0) ){
                                        Alert.alert(
                                            "Number cannot be negative",
                                            "It looks like you are trying to enter a negative number in a field.",
                                            [
                                                { text: "OK", onPress: () => {} }                                              
                                            ]
                                        )
                                    }
                                    // Will only show this if the total is less than zero meaning the overall sum is less than estimated budget
                                    else if ((Number(monthlyIncome) - Number(education) - Number(transportation) - Number(household) - Number(entertainmentBudget) - Number(selfBudget) - Number(utilitiesBudget)) < 0){
                                        Alert.alert(
                                            "Budget cannot be negative",
                                            "It looks like you will be in debt according to your plan. Enter your budget for now you can enter your debt later in the app.",
                                            [
                                                { text: "OK", onPress: () => {} }                                              
                                            ]
                                        )
                                    // If greater than zero will be stored as savings 
                                    }

                                    // Adding data to redux store 
                                    else{
                                        var navigateReady:boolean = false
                                        try {
                                            // Setting for the first time 
                                            dispatch({type:'SET_FIRST_NAME',payload:firstName})
                                            dispatch({type:'SET_LAST_NAME',payload:lastName})
                                            dispatch({type:'SET_MONTHLY_INCOME',payload:parseFloat(monthlyIncome)})
                                            dispatch({type:'SET_HOUSEHOLD_BUDGET',payload:parseFloat(household)})
                                            dispatch({type:'SET_ENTERTAINMENT_BUDGET',payload:parseFloat(entertainmentBudget)})
                                            dispatch({type:'SET_TRANSPORTATION_BUDGET',payload:parseFloat(transportation)})
                                            dispatch({type:'SET_EDUCATION_BUDGET',payload:parseFloat(education)})
                                            dispatch({type:'SET_UTILITIES_BUDGET',payload:parseFloat(utilitiesBudget)})
                                            dispatch({type:'SET_SELF_BUDGET',payload:parseFloat(selfBudget)})

                                            // Setting to the monthly store 
                                            dispatch({type:'SET_TOTAL_FOR_MONTH',payload:parseFloat(monthlyIncome)})
                                            dispatch({type:'SET_EDUCATION_FOR_MONTH',payload:parseFloat(education)})
                                            dispatch({type:'SET_HOUSEHOLD_FOR_MONTH',payload:parseFloat(household)})
                                            dispatch({type:'SET_ENTERTAINMENT_FOR_MONTH',payload:parseFloat(entertainmentBudget)})
                                            dispatch({type:'SET_TRANSPORTATION_FOR_MONTH',payload:parseFloat(transportation)})
                                            dispatch({type:'SET_UTILITIES_FOR_MONTH',payload:parseFloat(education)})
                                            dispatch({type:'SET_UTILITIES_FOR_MONTH',payload:parseFloat(utilitiesBudget)})
                                            dispatch({type:'SET_SELF_FOR_MONTH',payload:parseFloat(selfBudget)})

                                            // Initially both debt and surplus are set to zero so we are okay with that 
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
                            } buttonText="Submit" styles={{
                                height:'auto',
                                width:'auto',
                                backgroundColor: 'darkgreen',
                                justifycontent:'center',
                                alignSelf:'center',
                                alignItems:'center',
                                borderRadius:4
                            }} textStyle={{
                                color:'white',
                            }}></Zutton>
                            
                            <View style={{...styles.paddingBottom2}}></View>

                        </ScrollView>    
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

// Styling is done after this point 
const styles = StyleSheet.create({
    flexadd:{
        flex:1,
    },
    
    base:{
        backgroundColor:"#A366E8",
        flex:1, // This takes all the available space 
        paddingTop:'15%',
    },

    paddingTop2:{
        paddingTop:'2%',
    },

    paddingBottom2:{
        paddingBottom:'2%',
    },

    descriptionText:{
        alignContent:'flex-start',
        justifyContent:'flex-start',
        paddingTop:'3%',
        paddingLeft:'2%',
        flex:1
    },

    alignThisToTheCenter:{
        alignItems:'center',
    },

    body:{
        width:'100%',
        height:'auto',
        backgroundColor:'white',
        justifyContent:'flex-end'
    },

    inputArea:{
        alignItems:'flex-start',
        flexDirection:'row',
        paddingLeft:'2%',
        paddingRight:'2%',
        width:'100%',
    },

    // This controls all the input fields 
    lastName:{
        flex:1,
        height:28,
        paddingLeft:'2%',
        fontSize:16,
        justifyContent:'flex-end',
        backgroundColor:"#e0dcdc",
        borderRadius:4,
        // textAlign
    },

    firstName:{
        flex:2,
        height:28,
        fontSize:16,
        paddingLeft:'2%',
        backgroundColor:"#e0dcdc",
        borderRadius:4
    },

    // This is the new last name 
    lastNameNew:{
        flex:2,
        height:28,
        paddingLeft:'2%',
        fontSize:16,
        paddingRight:'2%',
        backgroundColor:"#e0dcdc",
        borderRadius:4
    },

    commonCharacterstics:{
        flexDirection:"row", 
        alignItems:'center', 
        paddingTop:'2%', 
        paddingLeft:'2%',
        paddingRight:'2%',
    },

    dollarSign:{
        color:'#404040',

    }
});

export default InformationScreen;