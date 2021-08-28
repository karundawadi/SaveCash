import React from 'react';
import {StyleSheet, View, Text, Switch, Button, TextInput, Modal, Platform ,Alert, Image, TouchableHighlight, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';
import {Ionicons} from '@expo/vector-icons';
import { useStore , useDispatch } from 'react-redux'; 
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';


// Basically this adds to the store and makes the changes 

function AddExpense(){
    const [expenseName, onExpenseNameChange] = React.useState("")
    const [amount, onAmountChange] = React.useState("")
    const [date, setDate] = React.useState(new Date());
    const [category, onCategoryChange] = React.useState("houseHold")
    const [show,showDatePicker] = React.useState(false)
    // const [isRecurring, onIsRecurringChange] = React.useState(false);
    // const toggleSwitch = () => onIsRecurringChange(previousState => !previousState)
    const onChange = (event:any, selectedDate:any) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        showDatePicker(false);
    };
    const dispatch  = useDispatch()
    const store = useStore()
    const navigation = useNavigation()

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex:1}}
            >
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
                                navigation.navigate('HomePage')
                            }}>
                                <Text style={{
                                    color:'#147EFB',
                                    paddingRight:'2%',
                                    fontSize:17,
                                    }}>Done</Text>
                        </TouchableHighlight>
                    </View>
                        <View style={{
                            paddingTop:'30%',
                            justifyContent:'flex-end'
                        }}>
                                <ScrollView bounces={false} style={{
                                }}>
                                {/* Expense Name */}
                                <Text style={styles.textForm}>Name of the expense</Text>
                                <View style={{flexDirection:"column", paddingTop:10, paddingLeft:10,paddingRight:10}}>
                                    <TextInput style={styles.inputField} value={expenseName} onChangeText={onExpenseNameChange} placeholder="Enter your expense" keyboardType="default"></TextInput>
                                </View>

                                <View style={{padding:'2%'}}></View>

                                <View style={{
                                        flexDirection:'row',
                                        alignItems:'flex-start',
                                        paddingLeft:10
                                    }}>
                                    <Text style={{
                                        flex:2,
                                        ...styles.fontDetails
                                    }}>Total Amount</Text>

                                    <Text style={{
                                        alignSelf:'center',
                                        ...styles.fontDetails
                                    }}>$</Text>

                                    <View style={{
                                        flex:2,
                                        paddingRight:10
                                    }}>
                                        <TextInput style={{
                                            height:30,
                                            ...styles.fontDetails,
                                            backgroundColor:"#e0dcdc",
                                            borderRadius:4,
                                            flexWrap:'wrap',
                                            paddingLeft:10
                                        }} value={amount} onChangeText={onAmountChange} placeholder="0.0" keyboardType="numeric"></TextInput>
                                    </View>
                                </View>

                                <View style={{padding:'2%'}}></View>

                                <View style={{flexDirection:'row', alignItems:'flex-start',justifyContent:'center',paddingLeft:10,paddingRight:10}}>
                                    <Text style={{flex:2,...styles.fontDetails}}>Date</Text>
                                    {Platform.OS === 'android' ? 
                                            <TouchableOpacity
                                                style={{
                                                    ...styles.inputField,
                                                    flex:2,
                                                }}
                                                onPress={()=>{
                                                    showDatePicker(true)
                                                }}
                                            >
                                                <Text style={{
                                                }}>{date.toDateString()}</Text>
                                                {
                                                    show && 
                                                        (<DateTimePicker 
                                                            style={{flex:2}} 
                                                            testID="dateTimePicker" 
                                                            value={date} 
                                                            onChange={onChange} 
                                                        />
                                                    )
                                                }
                                            </TouchableOpacity>:  
                                        <DateTimePicker 
                                            style={{flex:2}} 
                                            testID="dateTimePicker" 
                                            value={date} 
                                            onChange={onChange} 
                                        />}
                                </View>

                                <View style={{padding:'2%'}}></View>

                                <View style={{flexDirection:'row',alignItems:'flex-start',paddingLeft:10,justifyContent:'center',paddingRight:10}}>
                                    <Text style={{flex:2,...styles.fontDetails}}>Category</Text>
                                    <View style={{
                                        flex:2,
                                        }}>
                                        <RNPickerSelect
                                            style={{
                                                placeholder:{
                                                    // Font size for the picker 
                                                    fontSize:18,
                                                },
                                                inputIOS:{
                                                    ...styles.inputField,
                                                    paddingLeft:10
                                                },
                                            }}
                                            onValueChange={(value) => onCategoryChange(value)}
                                            useNativeAndroidPickerStyle ={true}
                                            placeholder= {{}}
                                            value={category}
                                            items={[ 
                                                { label: 'House Hold', value: 'houseHold' },
                                                { label: 'Personal', value: 'self' },
                                                { label: 'Transportation', value: 'transportation' },
                                                { label: 'Utilities', value: 'utilities' },
                                                { label: 'Entertainment', value: 'entertainment' },
                                                { label: 'Education', value: 'education' },
                                            ]}
                                        />
                                    </View>
                                </View>

                                <View style={{padding:'2%'}}></View>

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
                                            else if (isNaN(Number(amount))){
                                                Alert.alert("Number cannot contain a letter")
                                            }
                                            else if (Number(amount) == 0){
                                                Alert.alert("Amount cannot be zero")
                                            }
                                            else{
                                                // Adds to redux store 
                                                // This will subtract from the total as this should be done if we end till this point 
                                                dispatch({type:'SUBTRACT_FROM_TOTAL_FOR_MONTH',payload:parseFloat(amount)}) // Will update to monthly 
                                                dispatch({type:'SUBTRACT_FROM_TOTAL',payload:parseFloat(amount)}) // Will update on yearly 
                                                // This pattern is followed in the dispatch functions below. In the first line, the transaction is also saved

                                                switch (category){
                                                    case "houseHold": 
                                                        dispatch({type:'ADD_TO_HOUSEHOLD_TRANSACTION',description:expenseName,amount:amount,date:date})
                                                        dispatch({type:'SUBTRACT_FROM_HOUSEHOLD_FOR_MONTH',payload:parseFloat(amount)})
                                                        dispatch({type:'SUBTRACT_FROM_HOUSEHOLD',payload:parseFloat(amount)})
                                                        break;
                                                    case "self":
                                                        dispatch({type:'ADD_TO_SELF_TRANSACTION',description:expenseName,amount:amount,date:date})
                                                        dispatch({type:'SUBTRACT_FROM_SELF_FOR_MONTH',payload:parseFloat(amount)})
                                                        dispatch({type:'SUBTRACT_FROM_SELF',payload:parseFloat(amount)})
                                                        break;
                                                    case "transportation":
                                                        dispatch({type:'ADD_TO_TRANSPORTATION_TRANSACTION',description:expenseName,amount:amount,date:date})
                                                        dispatch({type:'SUBTRACT_FROM_TRANSPORTATION_FOR_MONTH',payload:parseFloat(amount)})
                                                        dispatch({type:'SUBTRACT_FROM_TRANSPORTATION',payload:parseFloat(amount)})
                                                        break;
                                                    case "utilities":
                                                        dispatch({type:'ADD_TO_UTILITIES_TRANSACTION',description:expenseName,amount:amount,date:date})
                                                        dispatch({type:'SUBTRACT_FROM_UTILITIES_FOR_MONTH',payload:parseFloat(amount)})
                                                        dispatch({type:'SUBTRACT_FROM_UTILITIES',payload:parseFloat(amount)})
                                                        break;
                                                    case "entertainment":
                                                        dispatch({type:'ADD_TO_ENTERTAINMENT_TRANSACTION',description:expenseName,amount:amount,date:date})
                                                        dispatch({type:'SUBTRACT_FROM_ENTERTAINMENT_FOR_MONTH',payload:parseFloat(amount)})
                                                        dispatch({type:'SUBTRACT_FROM_ENTERTAINEMENT',payload:parseFloat(amount)})
                                                        break;
                                                    case "education":
                                                        dispatch({type:'ADD_TO_EDUCATION_TRANSACTION',description:expenseName,amount:amount,date:date})
                                                        //dispatch({type:'SUBTRACT_FROM_EDUCATION_FOR_MONTH',payload:parseFloat(amount)})
                                                        //dispatch({type:'SUBTRACT_FROM_EDUCATION',payload:parseFloat(amount)})
                                                        break;
                                                    default:
                                                        Alert.alert("Please select an category")
                                                        break;
                                                }
                                                Alert.alert("Expense added !")
                                            }
                                        }}>
                                            <Ionicons name="add-circle-outline" color="green" size={40}/>
                                    </TouchableHighlight>
                                </View>

                                </ScrollView>

                        </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    base:{
        flex:1,
        paddingTop:10,
    },
    form:{
        paddingLeft:10,
        paddingTop:'8%',
        justifyContent:'flex-end'
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
        paddingLeft:10,
        fontSize:16
    },
    fontDetails:{
        fontSize:16
    }
})

export default AddExpense 