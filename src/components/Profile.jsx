

import React, { useState } from 'react'

const Profile = () => {

    const [profile, setProfile] = useState({
        name: 'Soundwave', 
        age: ''
    })
    const handleChange = e =>{
        const {name, value} = e.target
        setProfile((prevProfile)=>(

            {...prevProfile, [name]:value,
        }))
    }
  return (
    <div>
        <label> Name:
            <input type='text' name = "name" value={profile.name} onChange={handleChange}/>
        </label>
        <label> Age:
            <input type='number' name = "age" value={profile.age} onChange={handleChange}/>
        </label>
        <h1>Profile Info</h1>
        <p>Name: {profile.name}</p>
        <p>Name: {profile.age}</p>

    </div>
  )
}

export default Profile

//I didn't under this correctly.
