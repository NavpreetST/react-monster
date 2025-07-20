import React from 'react'

const UserList = () => {
    const users = [
        {id: 1, name: "Soundwave", age: 23423412},
        {id: 2, name: "Shockwave", age: 27645562},
        {id: 3, name: "Megatron", age: 33423412},
    ]
  return (
    <div>
        
        {users.map((user)=>(
            <div key = {user.id}>

                <h1>{user.id}</h1>
                <h1>{user.age}</h1>
                <h1>{user.name}</h1>
            </div>
        ))}

    </div>
  )
}

export default UserList