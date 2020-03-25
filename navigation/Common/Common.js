import React, { Component } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {AutNav,
        MainNav} from '../../navigation';

class Common extends Component {
    state={
        login : true
    }
    render() {
        return (
        <NavigationContainer>
           {
           
           this.state.login ? <MainNav/> : <AutNav/>
           
           
           }
        </NavigationContainer>
        )
    }
}

export default Common;
