import React, { Component } from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {
    LoginScreen,
    RegisterScreen
} from '../screens';


const Stack = createStackNavigator();
const AuthStack = createStackNavigator();


function AutNav(){
  return(

    <AuthStack.Navigator 
    screenOptions={{
      headerShown: false
    }}>
         
      <AuthStack.Screen  name="login" component={LoginScreen} /> 
      <AuthStack.Screen name="register" component={RegisterScreen} /> 
    </AuthStack.Navigator>

  )
}
class Navigation extends Component {
    render() {
        return (
        <NavigationContainer>
           <AutNav/>
        </NavigationContainer>
        )
    }
}

export default Navigation;
