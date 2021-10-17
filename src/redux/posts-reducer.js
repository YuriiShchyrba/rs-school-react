const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_SYMBOL = 'CHANGE-NEW-POST-SYMBOL';

export const addPostActionCreator = () => ({ type: ADD_POST });
export const changeNewPostSymbolActionCreator = (value) => ({ type: CHANGE_NEW_POST_SYMBOL, value: value });

let initialState = {
    posts: [
        { message: 'New post', id: 1, likesCount: 12 },
        { message: 'Another post', id: 2, likesCount: 32 },
        { message: 'And one more post', id: 3, likesCount: 332 },
        { message: 'Here we go!!!!', id: 4, likesCount: 500 },
        { message: 'Hey', id: 5, likesCount: 23 }
    ],
    postTextArea: 'ReactTraining',
};

const postsDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                message: state.postTextArea,
                id: state.posts.length+1,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, post],
                postTextArea: '',
            };
        case CHANGE_NEW_POST_SYMBOL:
            return {
                ...state,
                postTextArea: action.value,
            };
        default:
            return state;
    }
};

export default postsDataReducer;