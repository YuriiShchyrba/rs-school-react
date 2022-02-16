import * as axios from 'axios';

const apiInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'acc7c11b-cfc1-4d83-b8b0-2eee9bfb02bc',
    },
});

export const UserAPI = {
    getProfile: (userID) => {
        console.warn('Obsolete method. Use profileAPI.getProfile(userID).')
        return profileAPI.getProfile(userID);
    },

    getUsers: (currentPage = 1, usersPerPage = 10) => {
        return apiInstance.get(`users?page=${currentPage}&count=${usersPerPage}`).then((response) => {
            return response.data;
        });
    },

    loginUser: () => {
        console.warn('Obsolete method. Use authApi.loginUser().');
        return authAPI.loginUser();
    },

    followUser: (userID) => {
        return apiInstance.post('follow/' + userID).then((response) => {
            return response.data;
        });
    },

    unfollowUser: (userID) => {
        return apiInstance.delete('follow/' + userID).then((response) => {
            return response.data;
          });
    }
};

export const profileAPI = {
    getProfile: (userID) => {
        console.log(userID)
        return apiInstance.get('profile/' + userID).then((response) => {
            return response.data
        });
    },
    getStatus: (userID) => {
        return apiInstance.get('profile/status/' + userID).then((response) => {
            return response.data
        });
    },
    updateStatus: (status) =>{
        return apiInstance.put('profile/status', {status : status} ).then((response) => {
            return response.data
        });
    }
};

export const authAPI = {
    loginUser: () => {
        return apiInstance.get('auth/me').then((response) => response.data);
    },
    log: (userInfo) =>{
        return apiInstance.post('auth/login', userInfo).then((response) => {
            return response.data;
        });
    },
    logout: () =>{
        return apiInstance.delete('auth/login').then((response) => {
            return response.data;
        });
    }
};

