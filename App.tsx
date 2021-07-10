import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Button, Text, View, TextInput, SafeAreaView, Alert } from 'react-native';

function App() {
  const [firstName, onFirstNameChange] = React.useState("")
  const [lastName, onLastNameChange] = React.useState("")
  const [monthlyIncome, onmonthlyIncome] =  React.useState("")
  const [household,onhouseholdchange] = React.useState("")
  const [education,oneducationChange] = React.useState("")
  const [transportation,ontransportationChange] = React.useState("")

  return (
    <View style={styles.base}>
      <View style={styles.body}>
        {/* Header */}
        <View style={styles.alignThisToTheCenter}>
          <Text style={{fontSize:23, fontWeight:'bold'}}>Create profile</Text>
          <Text style={{fontSize:15,width:'70%'}}>Looks like this is the first time you are using this application</Text>
        </View>
        <View style={{paddingTop:20}}></View>

        {/* Form starts here */}
        <ScrollView>          
          <Text style={styles.descriptionText}>Enter your first name and last name</Text>
          <View style={{paddingTop:10}}></View>
          {/* First Name and last name */}
          <View style={styles.inputArea}>
            <SafeAreaView style={{flexDirection:"row",alignContent:"center"}}>
              <TextInput style={styles.firstName} value={firstName} onChangeText={onFirstNameChange} placeholder="First Name"/>
              <Text style={{padding:10,}}></Text>
              <TextInput style={styles.lastName} value={lastName} onChangeText={onLastNameChange} placeholder="Last Name"/>
            </SafeAreaView>
          </View>

          {/* Montly Income */}
          <View style={{flexDirection:"row", alignItems:'center', paddingTop:10, paddingLeft:10,paddingRight:10}}>
            <Text style={{paddingRight:10}}>Your monthlty income</Text>
            <Text>$</Text>
            <TextInput style={styles.lastName} value={monthlyIncome} onChangeText={onmonthlyIncome} placeholder="0.00" keyboardType="numbers-and-punctuation"></TextInput>
          </View>
          
          {/* Monthly Budget */}
          <Text style={styles.descriptionText}>Let's create your monthly budget</Text>
          
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

          {/* Need to create a custom component */}
          <View style={styles.buttonPage}>
            <Button onPress={()=>{
              Alert.alert("Working"+firstName+lastName+monthlyIncome+household+transportation+education)
            }} title="Hello" color='green'/>
          </View>
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
    paddingTop:80,
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
  firstName:{
    flex:1,
    height:28,
    fontSize:16,
    paddingLeft:4,
    justifyContent:"flex-end",
    backgroundColor:"#e0dcdc"
  },
  lastName:{
    flex:1,
    height:28,
    paddingLeft:4,
    fontSize:16,
    justifyContent:'flex-start',
    backgroundColor:"#e0dcdc",
  },
  buttonPage:{
    paddingTop:20,
    alignItems:'center',
    borderRadius:2
  }
});

export default App;