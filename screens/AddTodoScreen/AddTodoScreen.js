import React, { Component } from 'react'
import {View,
        Text,
        Button 
    } from 'react-native'

class AddTodoScreen extends Component {
    render() {
        return (
            <View>
                  <Text>
                    Add Todo Screen
                </Text>
                <Button
                title="go back"
                onPress={() => this.props.navigation.goBack()}
                />
            </View>
        )
    }
}

export default AddTodoScreen;