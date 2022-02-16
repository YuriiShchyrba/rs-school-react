import React, { useState, useEffect } from 'react';

const ProfileStatus = React.memo((props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(()=>{
    setStatus(props.status);
  }, [props.status]);

  const activateEditeMode = () =>{
    setEditMode(true);
  };

  const deactivateEditeMode = () =>{
    setEditMode(false);
    props.updateUserStatus(status);
  }

  const onStatusChange = (e) =>{
    setStatus(e.target.value);
  }

  return (
    <>
      <div>
        {!editMode && (
          <span
          onDoubleClick={activateEditeMode}
          >
          {props.status || 'No Status!'}</span>
        )}
      </div>
      <div>
        {editMode && (
          <input
            onChange={onStatusChange}
            onBlur={deactivateEditeMode}
            defaultValue={status}
            autoFocus={true}
          />
        )}
      </div>
    </>
  );
});

export default ProfileStatus;
