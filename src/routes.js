import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Referral from './pages/Referral';
import Register from './pages/Register';


export default function Routes(){
  return(
        <NavigationContainer>
          <AppStack.Navigator screenOptions={{headerShown:false}}>
            <AppStack.Screen name="Referral" component={Referral}/>
            <AppStack.Screen name ="Login" component={Login}/>
            <AppStack.Screen name="Register" component={Register}/>
          </AppStack.Navigator>
        </NavigationContainer>
  );
}