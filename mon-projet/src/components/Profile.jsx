import React from 'react'
import { useState } from 'react'
import Avatar from '../assets/images/photo-avatar-mini.jpg'



const Profile = () => {

    const [myProfile] = useState({
        firstname: 'Guy',
        lastname: 'ASSOHOUN',
        job: 'Test lead ISTQB',
        city: 'Lille',
    })

    const { firstname, lastname, job, city } = myProfile

    return (
        <header>
            <img src={Avatar} alt="Ma photo de profil" />
            <div id="profile">
                <h1>{firstname} {lastname}</h1>
                <h2>{job}</h2>
                <h2>{city}</h2>
            </div>
            </header>

            )
}

            export default Profile