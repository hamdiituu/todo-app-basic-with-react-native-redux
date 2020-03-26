import React, { Component } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {AutNav,
        MainNav} from '..';
import {connect} from 'react-redux';
class NavRoot extends Component {
    
    render() {
        return (
        <NavigationContainer>
           {
           
           this.props.Login ? <MainNav/> : <AutNav/>
           
           
           }
        </NavigationContainer>
        )
    }
}

function mapStateToProps(state){
    return{
        Login : state.loginReducer.loginSucces
    };
}

export default connect(mapStateToProps)(NavRoot);
