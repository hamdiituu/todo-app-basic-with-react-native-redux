import React, { Component } from 'react'
import {View,
        Text,
        Button 
    } from 'react-native'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {loginSuccess} from '../../redux/actions/LoginActions';


class LoginScreen extends Component {
    render() {
        return (
            <View>
                <Text>
                    Login Screen
                </Text>
                <Button
                title="Login Succes"
                onPress={() => this.props.dispatch(loginSuccess())}
                />
      
            </View>
        )
    }
}
function mapDispacthToProps(dispatch) {
    return {
      action: bindActionCreators(loginSuccess, dispatch)
    };
  }
  
export default  connect(mapDispacthToProps)(LoginScreen);