import Dialogs from './Dialogs';
import {
  addMessageActionCreator,
  changeNewMessageSymbolActionCreator,
} from '../../../redux/dialogs-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) =>{
  return {
    dialogsData: state.dialogsData,
    profileData: state.profileData,
  };
}

let mapDispatchToProps = (dispatch) =>{
  return{
    addMessage: (sentMessage, textPerson) =>{
      let action = addMessageActionCreator(sentMessage, textPerson);
      dispatch(action);
    },
    changeNewMessageSymbol: (symbol) =>{
      let action = changeNewMessageSymbolActionCreator(symbol);
      dispatch(action);
    },
  };
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;


// const DialogsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();
//         let dialogsData = state.dialogsData;
//         let profileData = state.profileData;
//         let onAddMessage = (sentMessage, textPerson) => {
//           let action = addMessageActionCreator(sentMessage, textPerson);
//           store.dispatch(action);
//         };

//         let onChangeNewMessageSymbol = (symbol) => {
//           let action = changeNewMessageSymbolActionCreator(symbol);
//           store.dispatch(action);
//         };
//         return <Dialogs
//           dialogsData={dialogsData}
//           profileData={profileData}
//           addMessage={onAddMessage}
//           changeNewMessageSymbol={onChangeNewMessageSymbol}
//         />;
//       }}
//     </StoreContext.Consumer>
//   );
// };