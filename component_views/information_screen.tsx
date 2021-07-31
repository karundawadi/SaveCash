import React from 'react';
import Zutton from '../custom_build/button';
import { ScrollView, StyleSheet, Text, View, TextInput, SafeAreaView, Alert } from 'react-native';
import { useSelector, useDispatch, useStore} from 'react-redux'; 
import {changeFirstName} from '../redux/actions/user_details';
import AsyncStorage from '@react-native-async-storage/async-storage';

function InformationScreen({ navigation } : {navigation : any}) {
    const [firstName, onFirstNameChange] = React.useState("")
    const [lastName, onLastNameChange] = React.useState("")
    const [monthlyIncome, onmonthlyIncome] =  React.useState("")
    const [household,onhouseholdchange] = React.useState("")
    const [education,oneducationChange] = React.useState("")
    const [transportation,ontransportationChange] = React.useState("")
    // const getValue = async() => {
    //     try{
    //         await AsyncStorage.getItem('userDetails')
    //         console.log(AsyncStorage.getItem('userDetails'))
    //         navigation.navigate("HomePage")
    //     } catch(e){
    //         console.log(e)
    //     }
    // }
    // getValue()

    const firstNameValue = useSelector((state) => {
        console.log(state.userDetails.firstName)
    })
    // console.log(firstNameValue)
    const useSt = useStore();
    // console.log(firstNameValue)
    // console.log(useSt.getState())
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
            
            <View style={{paddingTop:15}}></View>

            {/* Custom button; Zutton is created here */}
            <Zutton buttonTapHandler={()=>{
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
                // Since numeric key is only supported 
                else if ((Number(monthlyIncome)<0) || (Number(education) < 0) || (Number(household) < 0) || (Number(transportation)<0)){
                    Alert.alert("Number cannot be negative")
                }
                // Will only show this if the total is less than zero meaning the overall sum is less than estimated budget
                else if ((Number(monthlyIncome) - Number(education) - Number(transportation) - Number(household)) < 0){
                    Alert.alert("The amount is more than the budget")
                // If greater than zero will be stored as savings 
                }
                // Adding data to AsyncStorage 
                else{
                    const userDetails = {
                        firstName : firstName,
                        lastName : lastName,
                        monthlyIncome: monthlyIncome,
                        budget:{
                            household: household,
                            transportation: transportation,
                            education : education,
                        }
                    }
                    const saveUserInfo = async (value:any) =>{
                        try{
                            const jsonValue = JSON.stringify(value)
                            await AsyncStorage.setItem('userDetails',jsonValue)
                            // Navigating to another screen
                            navigation.navigate("HomePage")
                        } catch(e){
                            Alert.alert("Error entering data. Please try again!")
                        }
                    }
                    saveUserInfo(userDetails)
                }
            }} buttonText="Sumbit" styles={{
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
            
            <View style={{paddingBottom:10}}></View>
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
        paddingTop:'15%',
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