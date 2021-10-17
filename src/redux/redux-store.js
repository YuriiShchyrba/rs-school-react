import {combineReducers, createStore} from 'redux';
import profileDataReducer from './profile-reducer';
import dialogsDataReducer from './dialogs-reducer';
import postsDataReducer from './posts-reducer';
import friendsDataReducer from './friends-reducer';
import usersDataReducer from './users-reducer';


let reducers = combineReducers ({
    profileData : profileDataReducer,
    postsData : postsDataReducer,
    friendsData : friendsDataReducer,
    dialogsData : dialogsDataReducer,
    usersData : usersDataReducer,
});

let store = createStore(reducers);
window.store = store;

export default store;