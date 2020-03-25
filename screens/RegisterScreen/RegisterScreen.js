import React, { Component } from 'react'
import {View,
        Text,
        Button 
    } from 'react-native'




class RegisterScreen extends Component {
    render() {
        return (
            <View>
                <Text>
                    Register Screen
                </Text>
               <Button title="Go Back" onPress={() => this.props.navigation.goBack()}/>
            </View>
        )
    }
}

export default RegisterScreen;