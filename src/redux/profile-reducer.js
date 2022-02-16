import { profileAPI, UserAPI } from "../api/api";
const SET_PROFILE = 'SET_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

export const setProfileSuccess = (profile) => ({ type: SET_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });

export const setProfile = (userID) => {
    return (dispatch) => {
        if (!userID) return;
        UserAPI.getProfile(userID).then((data) => {
            dispatch(setProfileSuccess(data));
        });
    }
};

export const getUserStatus = (userID) => (dispatch) => {
    if (!userID) return;
    profileAPI.getStatus(userID).then((data) => {
        dispatch(setUserStatus(data));
    });
};

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then((data) => {
        if (data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    });
};



let initialState = {
    name: "Yurii Shchyrba",
    avatarSrc: "../assets/avatar.jpg",
    personalInfo: {
        dateOfBirth: "1996-03-27",
        city: "Ternopil",
        friends: 225,
        audios: 5000,
        videos: 204,
    },
    profile: null,
    status: '',
    fake: 0
};

const profileDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FAKE':
            return {
                ...state,
                fake: state.fake + 1
            };
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
};

export default profileDataReducer;