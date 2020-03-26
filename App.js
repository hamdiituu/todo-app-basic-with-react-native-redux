import React, { Component } from 'react';
import {NavRoot} from './navigation';
import {Provider} from 'react-redux';
import configureStore from './redux/store';
const store =configureStore();
class App extends Component {
    render() {
        return (
        <Provider store ={store}>
         <NavRoot />
         </Provider>
        )
    }
}

export default App;
