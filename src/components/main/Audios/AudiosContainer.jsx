import { connect } from "react-redux";
import { toggleAddAudioActionCreator } from "../../../redux/audio-reducer";
import Audios from "./Audios";

let mapStateToProps = (state) =>{
    return {
        audiosData : state.audiosData
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        toggleAddAudio : (audio) =>{
            let action = toggleAddAudioActionCreator(audio);
            dispatch(action);
        }
    }
};

const AudiosContainer = connect(mapStateToProps,mapDispatchToProps)(Audios);

export default AudiosContainer;