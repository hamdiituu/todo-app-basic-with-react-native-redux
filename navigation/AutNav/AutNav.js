import React, { Component } from 'react'
import {createStackNavigator} from '@react-navigation/stack';


import {
    LoginScreen,
    RegisterScreen,
} from '../../screens';

const AuthStack = createStackNavigator();



class AutNav extends Component {

    render() {
        return (
            <AuthStack.Navigator 
            screenOptions={{
              headerShown: false
            }}>
                 
              <AuthStack.Screen  name="login" component={LoginScreen} /> 
              <AuthStack.Screen name="register" component={RegisterScreen} /> 
            </AuthStack.Navigator>
        
        )
    }
}

export default AutNav;
