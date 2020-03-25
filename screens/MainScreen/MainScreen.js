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
                title="add to do"
                onPress={()=>this.props.navigation.navigate('addtodo')}
                />

            </View>
        )
    }
}

export default MainScreen;