const ADD_POST = 'ADD-POST';

export const addPostActionCreator = (message) => ({ type: ADD_POST , message});
let initialState = {
    posts: [
        { message: 'New post', id: 1, likesCount: 12 },
        { message: 'Another post', id: 2, likesCount: 32 },
        { message: 'And one more post', id: 3, likesCount: 332 },
        { message: 'Here we go!!!!', id: 4, likesCount: 500 },
        { message: 'Hey', id: 5, likesCount: 23 }
    ],
};

const postsDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                message: action.message,
                id: state.posts.length+1,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, post],
            };
        default:
            return state;
    }
};

export default postsDataReducer;