import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  activateEditeMode = () => {
    this.setState({
        editMode: true,
    });
  }

  deactivateEditeMode () {
    this.setState({
        editMode: false,
    });
    this.props.updateUserStatus(this.state.status);
  }

  onStatusChange = (e) =>{
    this.setState({
      status: e.target.value,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    this.state;
    if(prevProps.status !==this.props.status){
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <>
        <div>
            {
                !this.state.editMode &&
                <span onDoubleClick={this.activateEditeMode}>{this.props.status || 'No Status!'}</span>
            }
        </div>
        <div>
            {
                this.state.editMode &&
                <input onChange={this.onStatusChange} onBlur={this.deactivateEditeMode.bind(this)} defaultValue={this.state.status}  autoFocus={true}/>
            }

        </div>
      </>
    );
  }
}

export default ProfileStatus;
