import React, { Component } from 'react'
import {View,
        Text,
        Button
    } from 'react-native'


class MainScreen extends Component {
    render() {
        return (
            <View>
                <Text>
                    Main Screen
                </Text>

                <Button
                title="Login TO"
                onPress={()=>this.props.navigation.navigate('Login')}
                />

            </View>
        )
    }
}

export default MainScreen;