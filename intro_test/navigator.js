import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {NavigationContainer,TabRouter} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


function  HomeScreen({navigation}){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Home Page</Text>
      <Button title ="Detail Page" 
      onPress={()=> navigation.navigate('Detail')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}


function  ProfileScreen({navigation}){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Home Page</Text>
      <Button title ="Detail Page" 
      onPress={()=> navigation.navigate('Detail')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

function  SettingsScreen({navigation}){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Setting Page</Text>
      <Button title ="Detail Page" 
      onPress={()=> navigation.navigate('Detail')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
      title ="HOME PAGE"
      onPress={()=>navigation.navigate('Home')}
      />
      <Button
    title="Go to Details... again"
    onPress={() => navigation.push('Detail')}
    
    />
    <Button title="Go back" onPress={() => navigation.goBack()} />
    <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();
const SettingsStack = createStackNavigator();
const HomeStack = createStackNavigator();
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="First">
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen
                name="Settings"
                component={SettingsScreen}
              />
              <SettingsStack.Screen name="Profile" component={ProfileScreen} />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Second">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="Home" component={HomeScreen} />
              <HomeStack.Screen name="Details" component={DetailsScreen} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
    )
  }
}
