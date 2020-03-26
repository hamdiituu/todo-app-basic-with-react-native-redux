import * as LoginTypes  from '../../types/LoginTypes';

export const loginSuccess =() =>({
    type : LoginTypes.LOGIN_SUCCES,
    payload : true
})


export const loginFailere =() =>({
    type : LoginTypes.LOGIN_FAILERE,
    payload : true
})