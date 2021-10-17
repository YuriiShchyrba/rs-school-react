let PLAY_AUDIO = 'PLAY-AUDIO';
let STOP_AUDIO = 'STOP-AUDIO';
let TOGGLE_ADD_AUDIO = 'TOGGLE-ADD-AUDIO';


export const toggleAddAudioActionCreator = (audio) => ({ type: TOGGLE_ADD_AUDIO, audio });

let initialState = {
    audios: [
        { name: { artist: '', songName: '' }, length: '3.45', id: 1 },
    ],
}

const audiosDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ADD_AUDIO: {
            let stateCopy = { ...state, audios: [...state.audios] };
            let songDeleted = false;
            for (let i = 0; i < stateCopy.audios.length; i++) {
                if (stateCopy.audios[i].id === action.audio.id) {
                    stateCopy.audios.splice(i, 1);
                    songDeleted = true;
                    break;
                }
            }
            if(!songDeleted){
                stateCopy.audios.push(audio);
            }
            return stateCopy;
        };
        default:
            break;
    }
};

export default audiosDataReducer;