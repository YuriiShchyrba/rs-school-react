import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileDataReducer from './profile-reducer';
import dialogsDataReducer from './dialogs-reducer';
import postsDataReducer from './posts-reducer';
import friendsDataReducer from './friends-reducer';
import usersDataReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import mainReducer from './main-reducer';



let reducers = combineReducers ({
    profileData : profileDataReducer,
    postsData : postsDataReducer,
    friendsData : friendsDataReducer,
    dialogsData : dialogsDataReducer,
    usersData : usersDataReducer,
    auth : authReducer,
    main : mainReducer,
    form : formReducer
});

let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;

export default store;