import React from 'react';
import {StyleSheet, View} from 'react-native';
import InformationScreen from './component_views/information_screen'
import HomePage from './component_views/homepage'
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

function App() {
  var informationFilledIn:Boolean = false
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InformationScreen">
        <Stack.Screen name="InformationScreen" component={InformationScreen} options={{headerShown:false}}/>
        <Stack.Screen name="HomePage" component={HomePage} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// Styling is done after this point 
const styles = StyleSheet.create({
  home:{
    flex:1,
  }
});

export default App;