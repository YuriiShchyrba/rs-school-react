import React from 'react';
import Dialog from './Dialog';

class Dialogs extends React.Component{

  render(){
    let dialogs = this.props.dialogsData.dialogs.map((element) => {
      return (
        <Dialog
          dialogsData={this.props.dialogsData}
          profileData={this.props.profileData}
          personPhoto={element.personPhoto}
          name={element.name}
          key={element.id}
          id={element.id}
          messages={element.messages}
          addMessage={this.props.addMessage}
        />
      );
    });
    return <div className="dialogs">{dialogs}</div>;
  }
}

// const Dialogs = (props) => {
//   let dialogs = props.dialogsData.dialogs.map((element) => {
//     return (
//       <Dialog
//         dialogsData={props.dialogsData}
//         profileData={props.profileData}
//         personPhoto={element.personPhoto}
//         name={element.name}
//         key={element.id}
//         id={element.id}
//         messages={element.messages}
//         addMessage={props.addMessage}
//         changeNewMessageSymbol={props.changeNewMessageSymbol}
//       />
//     );
//   });
//   return <div className="dialogs">{dialogs}</div>;
// };

export default Dialogs;
