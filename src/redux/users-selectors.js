import { createSelector } from "reselect";

export const getUsersData = (state) =>{
    return state.usersData;
}

export const getUsersDataSuper = createSelector(getUsersData, (users)=>{
    return users;
});

export const getTotalUsersCount = (state) =>{
    return state.usersData.totalUsersCount;
}

export const getUsersPerPage = (state) =>{
    return state.usersData.usersPerPage;
}

export const getCurrentPage = (state) =>{
    return state.usersData.currentPage;
}

export const getIsFetching = (state) =>{
    return state.usersData.isFetching;
}

export const getFollowingProcess = (state) =>{
    return state.usersData.followingProcess;
}
