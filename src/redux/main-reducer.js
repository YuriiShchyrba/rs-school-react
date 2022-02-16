import { setUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
export const initialisedSuccess = () => ({type :INITIALIZED_SUCCESS });

let initialState = {
    initialized : false,
};

export const initialize = () => (dispatch) =>{
    let promise = dispatch(setUserData());
    Promise.all([promise]).then(()=>{
        dispatch(initialisedSuccess());
    });
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized : true
            }
        default:
            return state;
    }
};

export default mainReducer;