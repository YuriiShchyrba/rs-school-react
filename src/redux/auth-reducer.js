import { stopSubmit } from "redux-form";
import { authAPI, UserAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

export const setUserDataSuccess = (login, id, email, isAuth) => ({type:SET_USER_DATA, payLoad: {login,id,email}, isAuth});

export const setUserData = () => (dispatch) => {
         return UserAPI.loginUser().then((data) => {
            if(data.resultCode===0){
              let {login, id, email} = data.data;
              dispatch(setUserDataSuccess(login,id,email, true));
            } else {
                dispatch(setUserDataSuccess(null,null,null, false));
            }
          });
}

export const loginUser = (userData) => {
    return (dispatch) => {
        authAPI.log(userData).then((data)=>{
            if(data.resultCode===0){
                dispatch(setUserData());
            } else {
                dispatch(stopSubmit('login', { _error : data.messages}));
            }
        });
    };
};

export const logoutUser = ()=>{
    return (dispatch) =>{
        authAPI.logout().then((data)=>{
            if(data.resultCode ===0){
                dispatch(setUserData());
            }
        })
    }
}

let initialState = {
    login : null,
    id : null,
    email : null,
    isLogged : false,
};

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payLoad,
                isLogged : action.isAuth,
            };
        // case LOGIN:
        //     return {
        //         ...state,
        //         isLogged : true,
        //     };
        // case LOGOUT:
        //     return {
        //         ...state,
        //         isLogged : false,
        //     };
        default:
            return state;
    }
};

export default authReducer;