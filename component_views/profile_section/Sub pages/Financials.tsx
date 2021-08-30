import React from 'react';
import {StyleSheet, View, Text, Alert, Image, TouchableHighlight, Switch, TextInput, Pressable, FlatList, Modal} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { useStore , useDispatch } from 'react-redux'; 
import { ScrollView } from 'react-native-gesture-handler';
import {ProgressChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import ActivityRings from "react-native-activity-rings";
import { Inter_100Thin } from '@expo-google-fonts/inter';

// This screen is for financial details like piechart and others 
// Since different functions are used no longer need to balance the overall count for hooks 
function FinancialDetails(){

    // All the necessary states 
    const [modalVisible, setModalVisible] = React.useState(false)
    const [educationClicked, setEducationClicked] = React.useState(false)
    const [entertainmentClicked, setEntertainmentClicked] = React.useState(false)
    const [householdClicked, setHouseHoldClicked] = React.useState(false)
    const [selfClicked, setSelfClicked] = React.useState(false)
    const [transportationClicked, setTransportationClicked] = React.useState(false)
    const [utilitiesClicked, setUtilitesClicked] = React.useState(false)


    // This is to map all the expenses stored in the persisted store 
    const allExpensees = useStore().getState().allTransactions
    const educationExpense = allExpensees.education
    const entertainmentExpense = allExpensees.entertainment
    const householdExpenses = allExpensees.household
    const selfExpenses = allExpensees.self
    const transportationExpenses = allExpensees.transportation
    const utilitiesExpenses= allExpensees.utilities 

    // All created budget 
    const educationBudget  = Number(useStore().getState().userDetails.educationBudget)
    const entertainmentBudget  = Number(useStore().getState().userDetails.entertainmentBudget)
    const houseHoldBudget  = Number(useStore().getState().userDetails.houseHoldBudget)
    const personalBudget  = Number(useStore().getState().userDetails.selfBudget)
    const transportationBudget  = Number(useStore().getState().userDetails.transportationBudget)
    const utilitiesBudget  = useStore().getState().userDetails.utiltiesBudget

    // Total spent so far
    const educationLeft = Number(useStore().getState().monthlyBalance.educationLeft)
    const entertainmentLeft = Number(useStore().getState().monthlyBalance.entertainmentLeft)
    const householdLeft = Number(useStore().getState().monthlyBalance.householdLeft)
    const transporatationLeft = Number(useStore().getState().monthlyBalance.transportationLeft)
    const utiltiesLeft = Number(useStore().getState().monthlyBalance.utilitiesLeft)
    const personalLeft = Number(useStore().getState().monthlyBalance.selfLeft)

    // This will be displayed in the modal 
    var componentToRender; 
    if (educationClicked){
        componentToRender = <ListValues arrayVal={educationExpense}/>
    }
    else if (entertainmentClicked){
        componentToRender = <ListValues arrayVal={entertainmentExpense}/>
    }
    else if (householdClicked){
        componentToRender = <ListValues arrayVal={householdExpenses}/>
    }
    else if (selfClicked){
        componentToRender = <ListValues arrayVal={selfExpenses}/> 
    }
    else if (transportationClicked){
        componentToRender = <ListValues arrayVal={transportationExpenses}/>
    }
    else if (utilitiesClicked){
        componentToRender = <ListValues arrayVal={utilitiesExpenses}/>
    }
    else{
        componentToRender = <Text> No Data Found </Text>
    }

    // Chart Configs
    const chartConfig = { 
        width: 150,  
        height: 150,
        ringSize:7,
        radius: 14
    }
    
    // If more than 99% doesn't display the circle 
    // This is the data that will be taken from the application itself ; replaced all the sections with needed data 
    const data = [ 
        {
            label: "House Hold",
            value: (houseHoldBudget-householdLeft)/houseHoldBudget, // ring will use color from theme
            color:'#FD0100'
        },
        {
            label: "Personal",
            value: (personalBudget-personalLeft)/personalBudget,
            color:'#F76915'
        },
        {
            label: "Transportation",
            value: (transportationBudget-transporatationLeft)/transportationBudget,
            color:'#EEDE04'
        },
        {
            label: "Utilities",
            value: (utilitiesBudget-utiltiesLeft)/utilitiesBudget, // ring will use color from theme
            color:'#A0D636'
        },
        {
            label: "Entertainment",
            value: (entertainmentBudget-entertainmentLeft)/entertainmentBudget,
            color:'#2FA236'
        },
        {
            label: "Education",
            value: (educationBudget-educationLeft)/educationBudget,
            color:'#333ED4'
        }
    ]

    return <View style={styles.financialDetailsStyle}>
            <ScrollView bounces={false} style={{flex:1,flexDirection:'column'}}>
                {/* // This is for Modal */}
                <View>
                    <Modal 
                        animationType='slide'
                        visible={modalVisible}
                        transparent={true}
                        // This is for Android and Apple TV only
                        onRequestClose={() => {
                            setModalVisible(false)
                            setEducationClicked(false)
                            setEntertainmentClicked(false)
                            setHouseHoldClicked(false)
                            setTransportationClicked(false)
                            setUtilitesClicked(false)
                            setSelfClicked(false)
                        }}
                    >
                        <ScrollView bounces={false}>
                            <View style={{...styles.modalView}}>
                                <View
                                        style={styles.expesneBarStyle}
                                    >
                                        <Text style={styles.expenseBarLeft} >Expense Name</Text>
                                        <Text style={styles.expenseBarRight}>Amount</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                                        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                                </View>

                                {componentToRender}

                                <View style={{paddingTop:10}}></View>
                                <Pressable
                                    style={{
                                        borderRadius: 20,
                                        padding: 10,
                                        elevation: 2,
                                        backgroundColor:'#362819',
                                    }}
                                    onPress={() => {
                                        setModalVisible(false)
                                        setEducationClicked(false)
                                        setEntertainmentClicked(false)
                                        setHouseHoldClicked(false)
                                        setTransportationClicked(false)
                                        setUtilitesClicked(false)
                                        setSelfClicked(false)
                                        setModalVisible(!modalVisible)
                                    }}
                                    >
                                    <Text style={{color:'white'}}>Close</Text>
                                </Pressable>
                            </View>
                        </ScrollView>
                    </Modal>
                </View>
                {/* History container  */}
                <View style={{
                    height:250
                }}>
                    {/* This is for the summary expense */}
                    <Text
                        style={{
                            ...styles.padding2,
                            ...styles.fontDetails,
                            ...styles.paddingTopStyle,
                            ...styles.paddingBottomView,
                            fontWeight:'bold',
                        }}
                        >
                            History
                    </Text>
                    {/* This part is for history components only */}
                    <View style={{flex:2}}>
                        <ScrollView bounces = {false}>
                            <View
                                style={styles.expesneBarStyle}
                            >
                                <Text style={styles.expenseBarLeft} >Expense Name</Text>
                                <Text style={styles.expenseBarRight}>Amount</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                            </View>
                            {
                                educationExpense.map((test:any) => {
                                    return <ExpenseBar key={Math.random()} expenseName={test.description} expenseAmount={test.amount}></ExpenseBar>
                                })
                            }
                            {
                                entertainmentExpense.map((test:any) => {
                                    return <ExpenseBar key={Math.random()} expenseName={test.description} expenseAmount={test.amount}></ExpenseBar>
                                })
                            }
                            {
                                householdExpenses.map((test:any) => {
                                    return <ExpenseBar key={Math.random()} expenseName={test.description} expenseAmount={test.amount}></ExpenseBar>
                                })
                            }
                            {
                                selfExpenses.map((test:any) => {
                                    return <ExpenseBar key={Math.random()} expenseName={test.description} expenseAmount={test.amount}></ExpenseBar>
                                })
                            }
                            {
                                transportationExpenses.map((test:any) => {
                                    return <ExpenseBar key={Math.random()} expenseName={test.description} expenseAmount={test.amount}></ExpenseBar>
                                })
                            }
                            {
                                utilitiesExpenses.map((test:any) => {
                                    return <ExpenseBar key={Math.random()} expenseName={test.description} expenseAmount={test.amount}></ExpenseBar>
                                })
                            }
                            {
                                ((educationExpense.length + entertainmentExpense.length + householdExpenses.length + selfExpenses.length + transportationExpenses.length + utilitiesExpenses.length) <= 0.00)?<Text style={{paddingLeft:'2%',fontSize:16,fontStyle:'italic'}}>Empty. Nothing to show</Text>:<View/>  
                            }
                        </ScrollView>
                    </View>
            
                </View>
                
                {/* Action bar container*/}
                {/* Only supports value inbetween 0-99 more than this will not display in circle  */}
                <View style={{
                    flex:1
                }}>
                    <Text style={{
                            ...styles.padding2,
                            ...styles.fontDetails,
                            ...styles.paddingBottomView,
                            ...styles.paddingTopStyle,
                            fontWeight:'bold'
                        }}>
                            Percentage of each category used
                    </Text>
                    <View style={{
                        ...styles.padding2,
                        ...styles.backgroundTheme
                    }}>
                        
                        <View style={{
                            backgroundColor:'white',
                        }}>
                            <ActivityRings theme={'light'} legend={true} data={data} config={chartConfig} /> 
                        </View>
                    </View>
                </View>

                {/* Buttons container  */}
                <View style={{
                    flex:2
                }}>
                    {/* This is for all the expenses */}
                    {/* Planning to implements button here */}
                    <Text style={{
                            ...styles.padding2,
                            ...styles.fontDetails,
                            ...styles.paddingBottomView,
                            ...styles.paddingTopStyle,
                            fontWeight:'bold'
                        }}>
                            Expenses broken down
                    </Text>

                    {/* All the buttons are present here  */}
        
                    <View style={{
                        ...styles.paddingTopStyle,
                        flex:1,
                        justifyContent:'space-evenly',
                        alignItems:'center',
                        flexDirection:'row',
                        backgroundColor:'white',
                        ...styles.paddingBottomView,
                        ...styles.buttonInsideExpenseStyle,
                    }}>
                        <View style={{...styles.buttonHolder}}>
                            <TouchableHighlight onPress={()=>{
                                setModalVisible(true)
                                setEducationClicked(true)
                            }} style={styles.buttonStyle}>
                                <Text style={styles.buttonText}>Education</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={{...styles.buttonHolder}}>
                            <TouchableHighlight onPress={()=>{
                                setModalVisible(true)
                                setEntertainmentClicked(true)
                            }} style={styles.buttonStyle}>
                                <Text style={styles.buttonText}>Entertainment</Text>
                            </TouchableHighlight>
                        </View>

                        <View style={{...styles.buttonHolder}}>
                            <TouchableHighlight onPress={()=>{
                                setModalVisible(true)
                                setHouseHoldClicked(true)
                            }} style={styles.buttonStyle}>
                                <Text style={styles.buttonText}>Household</Text>
                            </TouchableHighlight>
                        </View>

                        <View style={{...styles.buttonHolder}}>
                            <TouchableHighlight onPress={()=>{
                                setModalVisible(true)
                                setSelfClicked(true)
                            }} style={styles.buttonStyle}>
                                <Text style={styles.buttonText}>Personal</Text>
                            </TouchableHighlight>
                        </View>

                        <View style={{...styles.buttonHolder}}>
                            <TouchableHighlight onPress={()=>{
                                setModalVisible(true)
                                setTransportationClicked(true)
                            }} style={styles.buttonStyle}>
                                <Text style={styles.buttonText}>Transportation</Text>
                            </TouchableHighlight>
                        </View>

                        <View style={{...styles.buttonHolder}}>
                            <TouchableHighlight onPress={()=>{
                                setModalVisible(true)
                                setUtilitesClicked(true)
                            }} style={styles.buttonStyle}>
                                <Text style={styles.buttonText}>Utilities</Text>
                            </TouchableHighlight>
                        </View>

                    </View>
                    <View style={{paddingTop:'3%'}}>
                        <Text></Text>
                    </View>
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
    paddingBottomView:{
        paddingBottom:'2%'
    },
    paddingTopStyle:{
        paddingTop:'2%'
    },
    backgroundTheme:{
        backgroundColor:'white',
    },
    tableFormat:{
        backgroundColor:'white',
        flexDirection:'row',

    },
    financialDetailsStyle :{
        flex:1,
        width:'100%',
        backgroundColor:'white'
    },
    buttonStyle:{
        alignSelf:'center',
        borderRadius:8,
        paddingVertical:10,
        paddingHorizontal:10,
        alignItems:'center',
        shadowColor:'#2a2a2a',
        backgroundColor:'blue',
        shadowRadius:4,
        shadowOffset: {
            width:0,
            height:2,
        },
        elevation:2,
    },
    buttonText:{
        color:'white'
    },
    expesneBarStyle:{
        backgroundColor:'#b4b8b5',
        flexDirection:'row',
        justifyContent:'space-around',
        paddingLeft:'2%'
    },
    expenseBarLeft:{
        flex:8,
        fontSize:16
    },
    expenseBarRight:{
        flex:2,
        fontSize:16
    },
    buttonInsideExpenseStyle:{
        flexWrap:'wrap'
    },
    buttonHolder:{
        paddingTop:'1%',
        paddingBottom:'1%'
    },
    modalView:{
        marginTop: 100,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }
})

function ExpenseBar(props:any){
    return <View>
        <View style={styles.expesneBarStyle}>
            <Text style={styles.expenseBarLeft} >{props.expenseName}</Text>
            <Text style={styles.expenseBarRight}>${props.expenseAmount}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>
    </View>
}

function ListValues(props:any){
    if(props.arrayVal.length == 0){
        return <View style={{width:'100%'}}>
        {
            <Text style={{fontSize:16,fontStyle:'italic',paddingTop:'2%'}}>There are no transactions so far. Please try again later.</Text>
        }
    </View>
    }
    else{
        return <View style={{width:'100%',height:300}}>
            <ScrollView bounces={false}>
                {
                    props.arrayVal.map((test:any) => {
                        return <ExpenseBar key={Math.random()} expenseName={test.description} expenseAmount={test.amount}></ExpenseBar>
                    })
                }
            </ScrollView>
        </View>
    }
}

export default FinancialDetails