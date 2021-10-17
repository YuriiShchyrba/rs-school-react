import profileDataReducer from './profile-reducer';
import dialogsDataReducer from './dialogs-reducer';
import postsDataReducer from './posts-reducer';
import friendsDataReducer from './friends-reducer ';

let store = {
    _callSubscriber() {
        console.log('no observers');
    },
    _state: {
        profileData: {
            name: "Yurii Shchyrba",
            avatarSrc: "../assets/avatar.jpg",
            personalInfo: {
                dateOfBirth: "1996-03-27",
                city: "Ternopil",
                friends: 225,
                audios: 5000,
                videos: 204,
            },
        },
        postsData: {
            posts: [
                { message: 'New post', id: 1, likesCount: 12 },
                { message: 'Another post', id: 2, likesCount: 32 },
                { message: 'And one more post', id: 3, likesCount: 332 },
                { message: 'Here we go!!!!', id: 4, likesCount: 500 },
                { message: 'Hey', id: 5, likesCount: 23 }
            ],
            postTextArea: 'ReactTraining',
        },
        friendsData: {
            friends: [
                { name: 'Nadiya Shchyrba', id: 1, personPhoto: '../assets/person.jpg', frequencyOfVisits: 645 },
                { name: 'Andriy Shchyrba', id: 2, personPhoto: '../assets/person.jpg', frequencyOfVisits: 778 },
                { name: 'Olya Shchyrba', id: 3, personPhoto: '../assets/person.jpg', frequencyOfVisits: 987 },
                { name: 'Alex Hordienko', id: 4, personPhoto: '../assets/person.jpg', frequencyOfVisits: 494 },
                { name: 'Oleksii Solilyak', id: 5, personPhoto: '../assets/person.jpg', frequencyOfVisits: 543 },
                { name: 'Dima Prach', id: 6, personPhoto: '../assets/person.jpg', frequencyOfVisits: 467 },
                { name: 'Suleiman Ametov', id: 7, personPhoto: '../assets/person.jpg', frequencyOfVisits: 254 },
                { name: 'Tanya Didyk', id: 8, personPhoto: '../assets/person.jpg', frequencyOfVisits: 323 },
                { name: 'Andriy Savka', id: 9, personPhoto: '../assets/person.jpg', frequencyOfVisits: 125 },
                { name: 'Vlad Kovalchuk', id: 10, personPhoto: '../assets/person.jpg', frequencyOfVisits: 555 },
            ],
        },
        dialogsData: {
            dialogs: [
                { name: 'Nadiya Shchyrba', id: 1, personPhoto: '../assets/person.jpg', messages: [["message-you", "Hey, how are you? How was week? "], ["message-person", "I'm fine, and you?"], ["message-you", "ok, cool"], ["message-person", "Lets go out"], ["message-you", "Sure"]] },
                { name: 'Andriy Shchyrba', id: 2, personPhoto: '../assets/person.jpg', messages: [["message-you", "Hey, how are you?"], ["message-person", "I'm fine, and you?"], ["message-you", "ok, cool"], ["message-person", "Lets go out"], ["message-you", "Sure"]] },
                { name: 'Olya Shchyrba', id: 3, personPhoto: '../assets/person.jpg', messages: [["message-you", "Hey, how are you?"], ["message-person", "I'm fine, and you?"], ["message-you", "ok, cool"], ["message-person", "Lets go out"], ["message-you", "Sure"]] },
                { name: 'Alex Hordienko', id: 4, personPhoto: '../assets/person.jpg', messages: [["message-you", "Hey, how are you?"], ["message-person", "I'm fine, and you?"], ["message-you", "ok, cool"], ["message-person", "Lets go out"], ["message-you", "Sure"]] },
                { name: 'Oleksii Solilyak', id: 5, personPhoto: '../assets/person.jpg', messages: [["message-you", "Hey, how are you?"]] },
            ],
            dialogTextArea: '',
        },
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profileData = profileDataReducer(this._state.profileData,action);
        this._state.dialogsData = dialogsDataReducer(this._state.dialogsData,action);
        this._state.postsData = postsDataReducer(this._state.postsData,action);
        this._state.friendsData = friendsDataReducer(this._state.friendsData,action);
        this._callSubscriber(this._state);
    },

    // _changeNewPostSymbol(value) {
    //     this._state.postsData.postTextArea = value;
    //     this._callSubscriber(this._state);
    // },
    // _addPost() {
    //     let post = {
    //         message: this._state.postsData.postTextArea,
    //         id: 6,
    //         likesCount: 0
    //     };
    //     this._state.postsData.posts.push(post);
    //     this._state.postsData.postTextArea = '';
    //     this._callSubscriber(this._state);
    // },
    // _changeNewMessageSymbol(value) {
    //     this._state.dialogsData.dialogTextArea = value;
    //     this._callSubscriber(this._state);
    // },
    // _addMessage(sentMessage, textPerson) {
    //     let message = ["message-you", sentMessage];
    //     let personExsists = false;
    //     for (let i = 0; i < this._state.dialogsData.dialogs.length; i++) {
    //         if (this._state.dialogsData.dialogs[i].name === textPerson) {
    //             this._state.dialogsData.dialogs[i].messages.push(message);
    //             personExsists = true;
    //         }
    //         if (personExsists) break;
    //     }
    //     if (!personExsists) {
    //         let dialog = { name: textPerson, id: 6, personPhoto: '../assets/person.jpg', messages: [message] };
    //         this._state.dialogsData.dialogs.push(dialog);
    //     }
    //     this._state.dialogsData.dialogTextArea = '';
    //     this._callSubscriber(this._state);
    // },

};

export default store;

// let store = {

//     _state: {
//         _profileData: {
//             _name: "Yurii Shchyrba",
//             _avatarSrc: "../assets/avatar.jpg",
//             _personalInfo: {
//                 dateOfBirth: "1996-03-27",
//                 city: "Ternopil",
//                 friends: 225,
//                 audios: 5000,
//                 videos: 204,
//             },
//             getName() {
//                 return this._name;
//             },
//             getAvatarSrc() {
//                 return this._avatarSrc;
//             },
//             getPersonalInfo() {
//                 return this._personalInfo;
//             }
//         },
//         getProfileData() {
//             return this._profileData;
//         },
//         _postsData: {
//             _posts: [
//                 { message: 'New post', id: 1, likesCount: 12 },
//                 { message: 'Another post', id: 2, likesCount: 32 },
//                 { message: 'And one more post', id: 3, likesCount: 332 },
//                 { message: 'Here we go!!!!', id: 4, likesCount: 500 },
//                 { message: 'Hey', id: 5, likesCount: 23 }
//             ],
//             _postTextArea: 'ReactTraining',
//             getPosts() {
//                 return this._posts;
//             },
//             setPost(post) {
//                 this._posts.push(post);
//                 this._rerenderEntireTree();
//             },
//             getPostTextArea() {
//                 return this._postTextArea;
//             },
//             setPostTextArea(value) {
//                 this._postTextArea = value;
//                 console.log(this._rerenderEntireTree);
//                 this._rerenderEntireTree();
//             },
//             clearPostTextArea() {
//                 this._postTextArea = '';
//                 this.rerenderEntireTree();
//             },
//             addPost() {
//                 let post = {
//                     message: this.getPostTextArea(),
//                     id: 6,
//                     likesCount: 0
//                 };
//                 this.setPost(post);
//                 this.clearPostTextArea();
//                 this.rerenderEntireTree();
//             }
//         },
//         getPostsData() {
//             return this._postsData;
//         },
//         _friendsData: {
//             _friends: [
//                 { name: 'Nadiya Shchyrba', id: 1, personPhoto: '../assets/person.jpg', frequencyOfVisits: 645 },
//                 { name: 'Andriy Shchyrba', id: 2, personPhoto: '../assets/person.jpg', frequencyOfVisits: 778 },
//                 { name: 'Olya Shchyrba', id: 3, personPhoto: '../assets/person.jpg', frequencyOfVisits: 987 },
//                 { name: 'Alex Hordienko', id: 4, personPhoto: '../assets/person.jpg', frequencyOfVisits: 494 },
//                 { name: 'Oleksii Solilyak', id: 5, personPhoto: '../assets/person.jpg', frequencyOfVisits: 543 },
//                 { name: 'Dima Prach', id: 6, personPhoto: '../assets/person.jpg', frequencyOfVisits: 467 },
//                 { name: 'Suleiman Ametov', id: 7, personPhoto: '../assets/person.jpg', frequencyOfVisits: 254 },
//                 { name: 'Tanya Didyk', id: 8, personPhoto: '../assets/person.jpg', frequencyOfVisits: 323 },
//                 { name: 'Andriy Savka', id: 9, personPhoto: '../assets/person.jpg', frequencyOfVisits: 125 },
//                 { name: 'Vlad Kovalchuk', id: 10, personPhoto: '../assets/person.jpg', frequencyOfVisits: 555 },
//             ],
//             getFriends() {
//                 return this._friends;
//             }
//         },
//         getFriendsData() {
//             return this._friendsData;
//         },
//         _dialogsData: {
//             _dialogs: [
//                 { name: 'Nadiya Shchyrba', id: 1, personPhoto: '../assets/person.jpg', messages: [["message-you", "Hey, how are you? How was week? "], ["message-person", "I'm fine, and you?"], ["message-you", "ok, cool"], ["message-person", "Lets go out"], ["message-you", "Sure"]] },
//                 { name: 'Andriy Shchyrba', id: 2, personPhoto: '../assets/person.jpg', messages: [["message-you", "Hey, how are you?"], ["message-person", "I'm fine, and you?"], ["message-you", "ok, cool"], ["message-person", "Lets go out"], ["message-you", "Sure"]] },
//                 { name: 'Olya Shchyrba', id: 3, personPhoto: '../assets/person.jpg', messages: [["message-you", "Hey, how are you?"], ["message-person", "I'm fine, and you?"], ["message-you", "ok, cool"], ["message-person", "Lets go out"], ["message-you", "Sure"]] },
//                 { name: 'Alex Hordienko', id: 4, personPhoto: '../assets/person.jpg', messages: [["message-you", "Hey, how are you?"], ["message-person", "I'm fine, and you?"], ["message-you", "ok, cool"], ["message-person", "Lets go out"], ["message-you", "Sure"]] },
//                 { name: 'Oleksii Solilyak', id: 5, personPhoto: '../assets/person.jpg', messages: [["message-you", "Hey, how are you?"]] },
//             ],
//             _dialogTextArea: '',
//             getDialogs() {
//                 return this._dialogs;
//             },
//             setDialog(dialog) {
//                 this._dialogs.push(dialog);
//                 this._rerenderEntireTree();
//             },
//             setMessage(index, message) {
//                 this._dialogs[index].messages.push(message);
//                 this._rerenderEntireTree();
//             },
//             getDialogTextArea() {
//                 return this._dialogTextArea;
//             },
//             clearDialogTextArea() {
//                 this._dialogTextArea = '';
//                 this._rerenderEntireTree();
//             },
//             setDialogTextArea(value) {
//                 this._dialogTextArea = value;
//                 this._rerenderEntireTree();
//             },
//             addMessage(sentMessage, textPerson) {
//                 let message = ["message-you", sentMessage];
//                 let personExsists = false;
//                 for (let i = 0; i < this.getDialogs().length; i++) {
//                     if (this.getDialogs()[i].name === textPerson) {
//                         this.setMessage(i, message);
//                         personExsists = true;
//                     }
//                     if (personExsists) break;
//                 }
//                 if (!personExsists) {
//                     let dialog = { name: textPerson, id: 6, personPhoto: '../assets/person.jpg', messages: [message] };
//                     this.setDialog(dialog);
//                 }
//                 this.clearDialogTextArea();
//                 rerenderEntireTree();
//             }

//         },
//         getDialogsData() {
//             return this._dialogsData;
//         }
//     },
//     getState() {
//         return this._state;
//     },
// };

// let rerenderEntireTree = () => {
//     console.log('works')
// }

// let state = {
//     avatarSrc: "../assets/avatar.jpg",
//     profileData: {
//         postsData: [
//             { message: 'New post', id: 1, likesCount: 12 },
//             { message: 'Another post', id: 2, likesCount: 32 },
//             { message: 'And one more post', id: 3, likesCount: 332 },
//             { message: 'Here we go!!!!', id: 4, likesCount: 500 },
//             { message: 'Hey', id: 5, likesCount: 23 },
//         ],
//         postTextArea: 'ReactTraining',
//         name: "Yurii Shchyrba",
//         personalInfo: {
//             dateOfBirth: "1996-03-27",
//             city: "Ternopil",
//             friends: 225,
//             audios: 5000,
//             videos: 204,
//         },
//     },
//     dialogsData: [
//         { name: 'Nadiya Shchyrba', id: 1, personPhoto: '../assets/person.jpg', messages: [["message-you", "Hey, how are you? How was week? "], ["message-person", "I'm fine, and you?"], ["message-you", "ok, cool"], ["message-person", "Lets go out"], ["message-you", "Sure"]] },
//         { name: 'Andriy Shchyrba', id: 2, personPhoto: '../assets/person.jpg', messages: [["message-you", "Hey, how are you?"], ["message-person", "I'm fine, and you?"], ["message-you", "ok, cool"], ["message-person", "Lets go out"], ["message-you", "Sure"]] },
//         { name: 'Olya Shchyrba', id: 3, personPhoto: '../assets/person.jpg', messages: [["message-you", "Hey, how are you?"], ["message-person", "I'm fine, and you?"], ["message-you", "ok, cool"], ["message-person", "Lets go out"], ["message-you", "Sure"]] },
//         { name: 'Alex Hordienko', id: 4, personPhoto: '../assets/person.jpg', messages: [["message-you", "Hey, how are you?"], ["message-person", "I'm fine, and you?"], ["message-you", "ok, cool"], ["message-person", "Lets go out"], ["message-you", "Sure"]] },
//         { name: 'Oleksii Solilyak', id: 5, personPhoto: '../assets/person.jpg', messages: [["message-you", "Hey, how are you?"]] },
//     ],
//     dialogsTextArea: '',
//     friendsData: [
//         { name: 'Nadiya Shchyrba', id: 1, personPhoto: '../assets/person.jpg', frequencyOfVisits: 645 },
//         { name: 'Andriy Shchyrba', id: 2, personPhoto: '../assets/person.jpg', frequencyOfVisits: 578 },
//         { name: 'Olya Shchyrba', id: 3, personPhoto: '../assets/person.jpg', frequencyOfVisits: 987 },
//         { name: 'Alex Hordienko', id: 4, personPhoto: '../assets/person.jpg', frequencyOfVisits: 494 },
//         { name: 'Oleksii Solilyak', id: 5, personPhoto: '../assets/person.jpg', frequencyOfVisits: 543 },
//         { name: 'Dima Prach', id: 6, personPhoto: '../assets/person.jpg', frequencyOfVisits: 467 },
//         { name: 'Suleiman Ametov', id: 7, personPhoto: '../assets/person.jpg', frequencyOfVisits: 254 },
//         { name: 'Tanya Didyk', id: 8, personPhoto: '../assets/person.jpg', frequencyOfVisits: 323 },
//         { name: 'Andriy Savka', id: 9, personPhoto: '../assets/person.jpg', frequencyOfVisits: 125 },
//         { name: 'Vlad Kovalchuk', id: 10, personPhoto: '../assets/person.jpg', frequencyOfVisits: 555 },
//     ],
// };

// export let changeNewPostSymbol = (value) => {
//     state.profileData.postTextArea = value;
//     rerenderEntireTree();
// };

// export let addNewMessage = (value) => {
//     state.dialogsTextArea = value;
//     rerenderEntireTree();
// };

// export let addPost = () => {
//     let post = {
//         message: state.profileData.postTextArea,
//         id: 6,
//         likesCount: 0
//     };
//     state.profileData.postsData.push(post);
//     state.profileData.postTextArea = '';
//     rerenderEntireTree();
// }

// export let addMessage = (sentMessage, textPerson) => {
//     let message = ["message-you", sentMessage];
//     let personExsists = false;
//     for (let i = 0; i < state.dialogsData.length; i++) {
//         if (state.dialogsData[i].name === textPerson) {
//             state.dialogsData[i].messages.push(message);
//             personExsists = true;
//         }
//         if (personExsists) break;
//     }
//     if (!personExsists) {
//         let dialog = { name: textPerson, id: 6, personPhoto: '../assets/person.jpg', messages: [message] };
//         state.dialogsData.push(dialog);
//     }
//     state.dialogsTextArea = '';
//     rerenderEntireTree();
// }

// export let subscriber = (observer) => {
//     rerenderEntireTree = observer;
// }

// export default state;