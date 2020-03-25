import React, { Component } from 'react'
import {View,
        Text,
        Button 
    } from 'react-native'




class LoginScreen extends Component {
    render() {
        return (
            <View>
                <Text>
                    Login Screen
                </Text>
                <Button
                title="regiser"
                onPress={() => this.props.navigation.navigate('register')}
                />
            </View>
        )
    }
}

export default LoginScreen;