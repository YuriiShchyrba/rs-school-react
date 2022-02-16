import React from 'react';
import preloader from '../../assets/150x150.gif';

const Preloader = () =>{
    return (
        <div>
            <img src={preloader} alt='Preloader'/>
        </div>
    )
};

export default Preloader;