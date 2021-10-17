const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';

export const toggleFollowActionCreator = (userID)=>({type:TOGGLE_FOLLOW, userID });
export const setUsersActionCreator = (users)=>({type:SET_USERS, users });

let initialState = {
    users : [
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
};

const usersDataReducer = ( state = initialState, action) =>{
    switch(action.type){
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map((user) =>{
                    if(action.userID === user.id){
                        return { ... user, follow : !user.follow};
                    }
                    return user;
                }),
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users,...action.users],
            };
        default:
            return state;
    }
};

export default usersDataReducer;