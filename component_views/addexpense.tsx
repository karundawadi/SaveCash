import React from 'react';
import {StyleSheet, View, Text, Switch, Button, TextInput, Modal, Platform ,Alert, Image, TouchableHighlight} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';
import {Ionicons} from '@expo/vector-icons';
import { useStore , useDispatch } from 'react-redux'; 

// Basically this adds to the value 

function AddExpense({ navigation } : {navigation : any}){
    const [expenseName, onExpenseNameChange] = React.useState("")
    const [amount, onAmountChange] = React.useState("")
    const [date, setDate] = React.useState(new Date());
    const [category, onCategoryChange] = React.useState("")
    const [isRecurring, onIsRecurringChange] = React.useState(false);
    const toggleSwitch = () => onIsRecurringChange(previousState => !previousState)
    const onChange = (event:any, selectedDate:any) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };

    const dispatch  = useDispatch()
    const store = useStore()
    const allExpense = store.getState().allTransactions
    return (
        <View style={styles.base}>
            <View style={styles.form}>
                <View style={{
                    alignItems:"flex-end",
                    paddingLeft:'2%'
                }}>
                    <TouchableHighlight 
                        style={{
                            borderRadius:40,
                        }} 
                        underlayColor='white'
                        onPress={()=>{
                            navigation.navigate("HomePage")
                        }}>
                            <Ionicons name="close-outline" color='red' size={40}/>
                    </TouchableHighlight>
                </View>
                {/* Expense Name */}
                <Text style={styles.textForm}>Name of the expense</Text>
                <View style={{flexDirection:"column", paddingTop:10, paddingLeft:10,paddingRight:10}}>
                    <TextInput style={styles.inputField} value={expenseName} onChangeText={onExpenseNameChange} placeholder="Enter your expense" keyboardType="default"></TextInput>
                </View>

                <View style={{padding:'2%'}}></View>

                {/* Expense Name */}
                <View style={{
                        flexDirection:'row',
                        alignItems:'flex-start',
                        paddingLeft:10
                    }}>
                    <Text style={{
                        flex:2
                    }}>Total Amount</Text>

                    <Text style={{
                        alignSelf:'center'
                    }}>$</Text>

                    <View style={{
                        flex:2,
                        paddingRight:10
                    }}>
                        <TextInput style={{
                            height:28,
                            fontSize:16,
                            backgroundColor:"#e0dcdc",
                            borderRadius:4,
                            flexWrap:'wrap',
                            paddingLeft:10
                        }} value={amount} onChangeText={onAmountChange} placeholder="0.0" keyboardType="default"></TextInput>
                    </View>
                </View>

                <View style={{padding:'2%'}}></View>
                
                <View style={{flexDirection:'row', alignItems:'flex-start',justifyContent:'center',paddingLeft:10}}>
                    <Text style={{flex:2}}>Date</Text>
                    <DateTimePicker 
                        style={{flex:2}}
                        testID="dateTimePicker"
                        value={date}
                        onChange={onChange}
                    />
                </View>

                <View style={{padding:'2%'}}></View>

                <View style={{flexDirection:'row',alignItems:'flex-start',paddingLeft:10,justifyContent:'center'}}>
                    <Text style={{flex:2}}>Category</Text>
                    <View style={{
                        flex:2,
                        }}>
                        <RNPickerSelect
                            style={{
                                placeholder:{
                                    // Font size for the picker 
                                    fontSize:18,
                                }
                            }}
                            onValueChange={(value) => onCategoryChange(value)}
                            placeholder= {{
                                label:'Select an item',
                                value:null
                            }}
                            items={[ 
                                { label: 'HouseHold', value: 'houseHold' },
                                { label: 'Personal', value: 'self' },
                                { label: 'Transportation', value: 'transportation' },
                                { label: 'Utilities', value: 'utilities' },
                                { label: 'Entertainment', value: 'entertainment' },
                            ]}
                        />
                    </View>
                </View>

                <View style={{padding:'2%'}}></View>

                <View style={{
                    flexDirection:'row',
                    paddingLeft:10
                    }}>
                    <Text style={{flex:2}}>Recurring</Text>
                    <View style={{flex:2, alignItems:'center'}}>
                        <Switch
                            trackColor={{ false: "#767577", true: "green" }} // The thing that changes color
                            thumbColor={isRecurring ? "white" : "white"} // To track the thumb color i.e. the thing that moves
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isRecurring}
                        />
                    </View>
                </View>    
                <View style={{paddingTop:'2%'}}></View>            
                
                <View style={{alignItems:'center'}}>
                    <TouchableHighlight 
                        style={{
                            borderRadius:40,
                        }} 
                        onPress={()=>{
                            var now = new Date()
                            if (expenseName.length == 0){
                                Alert.alert("Expense Name cannot be Empty")
                            }
                            else if (amount.length == 0){
                                Alert.alert("Amount cannot be empty")
                            }
                            else if (date > now){
                                Alert.alert("Date cannot be in the future") 
                            }
                            else if (category.length == 0){
                                Alert.alert("Category cannnot be empty")
                            }
                            else if (category === "Select an item"){
                                Alert.alert("Please select a category")
                            }
                            else if (Number(amount) < 0){
                                Alert.alert("Amount cannot be less than 0")
                            }
                            else if (Number(amount) == 0){
                                Alert.alert("Amount cannot be zero")
                            }
                            else{
                                // Adds to redux store 
                                switch (category){
                                    case "houseHold": 
                                        dispatch({type:'ADD_TO_HOUSEHOLD_TRANSACTION',description:expenseName,amount:amount,date:date})
                                        break;
                                    case "self":
                                        dispatch({type:'ADD_TO_SELF_TRANSACTION',description:expenseName,amount:amount,date:date})
                                        break;
                                    case "transportation":
                                        dispatch({type:'ADD_TO_TRANSPORTATION_TRANSACTION',description:expenseName,amount:amount,date:date})
                                        break;
                                    case "utilities":
                                        dispatch({type:'ADD_TO_UTILITIES_TRANSACTION',description:expenseName,amount:amount,date:date})
                                        break;
                                    case "entertainment":
                                        dispatch({type:'ADD_TO_ENTERTAINMENT_TRANSACTION',description:expenseName,amount:amount,date:date})
                                        break;
                                    default:
                                        Alert.alert("Please select a category")
                                        break;
                                }
                                Alert.alert("Successful")
                            }
                        }}>
                            <Ionicons name="add-circle-outline" color="green" size={40}/>
                    </TouchableHighlight>
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
        paddingTop:'8%'
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