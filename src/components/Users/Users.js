import React from 'react'
import ShowUsers from './ShowUsers'
import './Users.css'

function Users(props) {
    if(props.users.length===0)
    return ;

  return (
    <div className='users'>
     {props.users.map((user)=>(
        <ShowUsers key={user.id} username={user.username} age={user.age} />
     ))}
    </div>
  )
}

export default Users