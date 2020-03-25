import React, { Component } from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {
    LoginScreen,
    RegisterScreen,
    MainScreen,
    AddTodoScreen,
    UpdateTodoScreen
} from '../screens';


const MainStack = createStackNavigator();
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

function MainNav(){
    return(
  
      <MainStack.Navigator 
      screenOptions={{
        headerShown: false
      }}>
           
        <MainStack.Screen  name="main" component={MainScreen} /> 
        <MainStack.Screen name="addtodo" component={AddTodoScreen} /> 
        <MainStack.Screen name ="updatetodo" component={UpdateTodoScreen}/>
      </MainStack.Navigator>
  
    )
  }
  

class Navigation extends Component {
    state={
        login : true
    }
    render() {
        return (
        <NavigationContainer>
           {
           
           this.state.login ? <MainNav/> : <AutNav/>
           
           
           }
        </NavigationContainer>
        )
    }
}

export default Navigation;
