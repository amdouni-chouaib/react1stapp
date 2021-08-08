import React from 'react';
import Ok from '../../img/ok.jpg';
import Profile from '../../style/profile.css'

const ProfilePhoto = () => {
    return (
        <div className={Profile}>
            <img src={Ok} alt="ok" />

        </div>
    )
}

export default ProfilePhoto
