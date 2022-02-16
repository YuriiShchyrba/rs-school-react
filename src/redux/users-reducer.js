const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';
const GET_TOTAL_USERS_COUNT = 'GET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWED_PROCESSED = 'TOGGLE_IS_FOLLOWED_PROCESSED';
import { UserAPI } from '../api/api';

export const toggleFollowSuccess = (userID) => ({ type: TOGGLE_FOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const getTotalUsersCount = (totalUsersCount) => ({ type: GET_TOTAL_USERS_COUNT, totalUsersCount });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowedProcessed = (isFetching,userID) => ({ type: TOGGLE_IS_FOLLOWED_PROCESSED, isFetching, userID });

export const getUsers = (page,usersPerPage) =>{
    return (dispatch) =>{
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        UserAPI.getUsers(page,usersPerPage).then((data)=>{
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(getTotalUsersCount(data.totalCount));
        });
    };
};

export const toggleFollow = (user) => {
    return (dispatch) => {
        debugger
        dispatch(toggleIsFollowedProcessed(true, user.id));
        if (user.followed) {
          UserAPI.unfollowUser(user.id).then((data) => {
            if (data.resultCode === 0) {
                dispatch(toggleFollowSuccess(user.id));
            }
            dispatch(toggleIsFollowedProcessed(false, user.id));
          });
        } else {
          UserAPI.followUser(user.id).then((data) => {
            if (data.resultCode === 0) {
                dispatch(toggleFollowSuccess(user.id));
            }
            dispatch(toggleIsFollowedProcessed(false, user.id));
          });
        }
    };
}

let initialState = {
    users: [
        // {
        //   id: 1,
        //   name: 'Olha Shchyrba',
        //   follow: true,
        //   status: 'I love art',
        //   location: { city: 'New York', country: 'USA' },
        //   photoSrc: '../assets/person.jpg',
        // },
        // {
        //   id: 2,
        //   name: 'Andriy Shchyrba',
        //   follow: true,
        //   status: 'I love build buildings',
        //   location: { city: 'Ternopil', country: 'Ukraine' },
        //   photoSrc: '../assets/person.jpg',
        // },
        // {
        //   id: 3,
        //   name: 'Nadiya Shchyrba',
        //   follow: true,
        //   status: 'I love help people',
        //   location: { city: 'Krakow', country: 'Poland' },
        //   photoSrc: '../assets/person.jpg',
        // },
        // {
        //   id: 4,
        //   name: 'Oleksii Solilyak',
        //   follow: true,
        //   status: 'I love Call of Duty',
        //   location: { city: 'Queens', country: 'USA' },
        //   photoSrc: '../assets/person.jpg',
        // },
        // {
        //   id: 5,
        //   name: 'Alex Hordienko',
        //   follow: true,
        //   status: 'I love programming',
        //   location: { city: 'Queens', country: 'USA' },
        //   photoSrc: '../assets/person.jpg',
        // },
        // {
        //   id: 6,
        //   name: 'Vlad Kovalchuk',
        //   follow: true,
        //   status: 'I love money',
        //   location: { city: 'Chicago', country: 'USA' },
        //   photoSrc: '../assets/person.jpg',
        // }
    ],
    totalUsersCount: 0,
    usersPerPage: 10,
    currentPage: 1,
    isFetching: false,
    followingProcess: [],
};

const usersDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (action.userID === user.id) {
                        return { ...user, followed: !user.followed };
                    }
                    return user;
                }),
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
            };
        case GET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case TOGGLE_IS_FOLLOWED_PROCESSED:
            return {
                ...state,
                followingProcess: action.isFetching ? [...state.followingProcess, action.userID] : state.followingProcess.filter((id) => action.userID!=id) ,
            };
        default:
            return state;
    }
};

export default usersDataReducer;