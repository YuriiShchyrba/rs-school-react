let initialState = {
    friends: [
        { name: 'Nadiya Shchyrba', id: 1, personPhoto: '../assets/person.jpg', frequencyOfVisits: 645 },
        { name: 'Andriy Shchyrba', id: 2, personPhoto: '../assets/person.jpg', frequencyOfVisits: 2778 },
        { name: 'Olya Shchyrba', id: 3, personPhoto: '../assets/person.jpg', frequencyOfVisits: 2987 },
        { name: 'Alex Hordienko', id: 4, personPhoto: '../assets/person.jpg', frequencyOfVisits: 594 },
        { name: 'Oleksii Solilyak', id: 5, personPhoto: '../assets/person.jpg', frequencyOfVisits: 543 },
        { name: 'Dima Prach', id: 6, personPhoto: '../assets/person.jpg', frequencyOfVisits: 467 },
        { name: 'Suleiman Ametov', id: 7, personPhoto: '../assets/person.jpg', frequencyOfVisits: 254 },
        { name: 'Tanya Didyk', id: 8, personPhoto: '../assets/person.jpg', frequencyOfVisits: 323 },
        { name: 'Andriy Savka', id: 9, personPhoto: '../assets/person.jpg', frequencyOfVisits: 125 },
        { name: 'Vlad Kovalchuk', id: 10, personPhoto: '../assets/person.jpg', frequencyOfVisits: 555 },
    ],
};

const friendsDataReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.friends = [...state.friends];
    stateCopy.friends = stateCopy.friends.sort((a,b)=>b.frequencyOfVisits - a.frequencyOfVisits)
    return stateCopy;
};

export default friendsDataReducer;