import React, { Component } from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from '../screens/MainScreen/MainScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
const Stack = createStackNavigator();

const AuthStack = createStackNavigator();


function NavStack(){
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
           <NavStack/>
        </NavigationContainer>
        )
    }
}

export default Navigation;
