import React, { Component } from 'react'
import {View,
        Text,
        Button 
    } from 'react-native'

class UpdateTodoScreen extends Component {
    render() {
        return (
            <View>
                <Text>
                    Update Todo Screen
                </Text>
                <Button
                title="go back"
                onPress={() => this.props.navigation.goBack()}
                />
            </View>
        )
    }
}

export default UpdateTodoScreen;