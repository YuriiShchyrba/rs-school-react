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
};

const profileDataReducer = (state = initialState, action) => {
    return state;
};

export default profileDataReducer;