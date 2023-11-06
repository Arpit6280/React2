import React from 'react'
import UserForm from './UserForm'
import './NewUser.css'

function NewUser(props) {
    const saveUserDataHandler=(user)=>{
        const userData={
            ...user,
            id:Math.random().toString()
        }
        console.log(userData);
        props.addUser(userData);
    }
  return (
    <div className='new-user'>
        <UserForm onSaveUserData={saveUserDataHandler}/>
    </div>
  )
}

export default NewUser