import React from 'react';
import {StyleSheet, View} from 'react-native';
import InformationScreen from './component_views/information_screen'
import HomePage from './component_views/homepage'
import 'react-native-gesture-handler';
import AddExpense from './component_views/addexpense';
import UserProfile from './component_views/profile_section/user_profile'
import LandingPage from './component_views/landing_page';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/index';

const Stack = createStackNavigator()

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LandingPage">
            <Stack.Screen name="LandingPage" component={LandingPage} options={{
              headerShown:false,
              headerLeft: ()=>null,
              gestureEnabled: false,
              }}/>
            <Stack.Screen name="InformationScreen" component={InformationScreen} options={{
              headerShown:false,
              headerLeft: ()=>null,
              gestureEnabled: false
              }}/>
            <Stack.Screen name="HomePage" component={HomePage} options={{
              headerShown:false,
              headerLeft: ()=>null,
              gestureEnabled: false
              }}/>
            <Stack.Screen name="AddExpense" component={AddExpense} options={{
              headerShown:false,
            }}/>
            <Stack.Screen name="UserProfile" component={UserProfile} options={{headerShown:false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

// Styling is done after this point 
const styles = StyleSheet.create({
  home:{
    flex:1,
  }
});

export default App;