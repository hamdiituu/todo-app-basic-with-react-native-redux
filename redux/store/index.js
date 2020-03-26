import {createStore} from 'redux';

import reducers from '../reducers/Common';

function configureStore(){
    return createStore(reducers);
}

export default configureStore;