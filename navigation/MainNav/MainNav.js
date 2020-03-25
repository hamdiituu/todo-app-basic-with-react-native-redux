import React, { Component } from 'react'
import {createStackNavigator} from '@react-navigation/stack';

import {
    MainScreen,
    AddTodoScreen,
    UpdateTodoScreen
} from '../../screens';


const MainStack = createStackNavigator();

class MainNav extends Component {
    render() {
        return (
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
}

export default MainNav;
