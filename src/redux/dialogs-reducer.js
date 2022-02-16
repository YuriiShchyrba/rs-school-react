const ADD_MESSAGE = 'ADD-MESSAGE';
// const CHANGE_NEW_MESSAGE_SYMBOL = 'CHANGE-NEW-MESSAGE-SYMBOL';

export const addMessageActionCreator = (sentMessage, textPerson) => ({ type: ADD_MESSAGE, sentMessage: sentMessage, textPerson: textPerson });
// export const changeNewMessageSymbolActionCreator = (value) => ({ type: CHANGE_NEW_MESSAGE_SYMBOL, value: value });

let initialState = {
    dialogs: [
        { name: 'Nadiya Shchyrba', id: 1, personPhoto: '../assets/person.jpg', messages: [["message-you", "Hey, how are you? How was week? "], ["message-person", "I'm fine, and you?"], ["message-you", "ok, cool"], ["message-person", "Lets go out"], ["message-you", "Sure"]] },
        { name: 'Andriy Shchyrba', id: 2, personPhoto: '../assets/person.jpg', messages: [["message-you", "Hey, how are you?"], ["message-person", "I'm fine, and you?"], ["message-you", "ok, cool"], ["message-person", "Lets go out"], ["message-you", "Sure"]] },
        { name: 'Olya Shchyrba', id: 3, personPhoto: '../assets/person.jpg', messages: [["message-you", "Hey, how are you?"], ["message-person", "I'm fine, and you?"], ["message-you", "ok, cool"], ["message-person", "Lets go out"], ["message-you", "Sure"]] },
        { name: 'Alex Hordienko', id: 4, personPhoto: '../assets/person.jpg', messages: [["message-you", "Hey, how are you?"], ["message-person", "I'm fine, and you?"], ["message-you", "ok, cool"], ["message-person", "Lets go out"], ["message-you", "Sure"]] },
        { name: 'Oleksii Solilyak', id: 5, personPhoto: '../assets/person.jpg', messages: [["message-you", "Hey, how are you?"]] },
    ],
    // dialogTextArea: '',
};

const dialogsDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let message = ["message-you", action.sentMessage];
            let personExsists = false;
            let stateCopy = {
                ...state,
                dialogs: state.dialogs.map((dialog, ind) => {
                    if (dialog.name === action.textPerson) {
                        dialog = { ...dialog };
                        personExsists = true;
                        dialog.messages = [...dialog.messages, message];
                        return dialog;
                    }
                    return dialog;
                }),
                // dialogTextArea: ''
            }
            if (!personExsists) {
                let dialog = { name: action.textPerson, id: 6, personPhoto: '../assets/person.jpg', messages: [message] };
                stateCopy.dialogs.push(dialog);
            }
            return stateCopy;
        }
        // case CHANGE_NEW_MESSAGE_SYMBOL:
        //     return {
        //         ...state,
        //         dialogTextArea: action.value,
        //     };
        default:
            return state;
    }
};

export default dialogsDataReducer;