import React from 'react';

class Name extends React.Component{

    render(){
        return (
            <h2 className="main-page__name">{this.props.name}</h2>
        );
    }
}

// const Name = (props) => {
//     return (
//         <h2 className="main-page__name">{props.name}</h2>
//     );
// };

export default Name;
