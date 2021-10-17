import React from 'react';

class PersonalInfo extends React.Component{

  constructor (props) {
    super(props);
    this.dob = props.personalInfo.dateOfBirth;
    this.city = props.personalInfo.city;
    this.friends = props.personalInfo.friends;
    this.audios = props.personalInfo.audios;
    this.videos = props.personalInfo.videos;
  }

  render(){
    return (
      <div className="personal-info__wrapper">
        <div className="personal-info__headers">
          <h5>Date of birth</h5>
          <h5>City</h5>
          <h5>Friends</h5>
          <h5>Audios</h5>
          <h5>Videos</h5>
        </div>
        <div className="personal-info__info">
          <p>{this.dob}</p>
          <p>{this.city}</p>
          <p>{this.friends}</p>
          <p>{this.audios}</p>
          <p>{this.videos}</p>
        </div>
      </div>
    );
  }

}

// const PersonalInfo = (props) => {
//   let dob = props.personalInfo.dateOfBirth;
//   let city = props.personalInfo.city;
//   let friends = props.personalInfo.friends;
//   let audios = props.personalInfo.audios;
//   let videos = props.personalInfo.videos;
//   return (
//     <div className="personal-info__wrapper">
//       <div className="personal-info__headers">
//         <h5>Date of birth</h5>
//         <h5>City</h5>
//         <h5>Friends</h5>
//         <h5>Audios</h5>
//         <h5>Videos</h5>
//       </div>
//       <div className="personal-info__info">
//         <p>{dob}</p>
//         <p>{city}</p>
//         <p>{friends}</p>
//         <p>{audios}</p>
//         <p>{videos}</p>
//       </div>
//     </div>
//   );
// };

export default PersonalInfo;
