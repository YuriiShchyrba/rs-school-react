import React from 'react';

class PersonalInfo extends React.Component {
  render() {
    let github = 'YuriiShchyrba';
    let vk = 'Yurii Shchyrba';
    let instagram = '@yuriishchyrba';
    if (this.props.contacts) {
      github = this.props.contacts.github;
      vk = this.props.contacts.vk;
      instagram = this.props.contacts.instagram;
    }
    return (
      <div className="personal-info__wrapper">
        <div className="personal-info__headers">
          <h5>Date of birth</h5>
          <h5>City</h5>
          <h5>Friends</h5>
          <h5>Audios</h5>
          <h5>Videos</h5>
          <h5>Looking for Job</h5>
          <h5>Description</h5>
          <h5>GitHub</h5>
          <h5>VK</h5>
          <h5>Instagram</h5>
        </div>
        <div className="personal-info__info">
          <p>{this.props.personalInfo.dateOfBirth}</p>
          <p>{this.props.personalInfo.city}</p>
          <p>{this.props.personalInfo.friends}</p>
          <p>{this.props.personalInfo.audios}</p>
          <p>{this.props.personalInfo.videos}</p>
          <p>{this.props.lookingForJob ? this.props.lookingForJob.toString() : 'Yes'}</p>
          <p>{this.props.description ? this.props.description : 'Full Stack Developer'}</p>
          <p>{github}</p>
          <p>{vk}</p>
          <p>{instagram}</p>
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
