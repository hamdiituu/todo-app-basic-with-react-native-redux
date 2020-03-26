import * as LoginTypes from '../../types/LoginTypes';

const loginReducer =(state={},action) =>{
switch (action.type) {
    case LoginTypes.LOGIN_SUCCES:
        return {...state , loginSucces : action.payload};
    case LoginTypes.LOGIN_FAILERE:
        return {...state ,loginFailere : action.payload};
    default:
        return state;
}
}
export default loginReducer;