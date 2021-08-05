import React from 'react';
import {StyleSheet, View, Text, Alert, Image, TouchableHighlight, Switch} from 'react-native';
import {Ionicons} from '@expo/vector-icons'


function UserProfile({ navigation } : {navigation : any}){
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    React.useEffect(()=>{
        setIsEnabled(false)
    })
    return (
        <View style={styles.base}>
            <View style={styles.topBar}>
                <Text>User Profile</Text>
                <View style={styles.padding2}></View>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    style={{transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }]}} 
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                <View style={styles.padding2}></View>
                <Text>Financials</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    base:{
        paddingTop:'3%',
        backgroundColor:'red',
        flex:1,
        alignItems:'center',
    },
    topBar:{
        flexDirection:'row'
    },
    padding2:{
        padding:'2%'
    }
})

export default UserProfile 