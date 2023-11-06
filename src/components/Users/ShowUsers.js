import React from 'react'
import './ShowUser.css'

function ShowUsers(props) {
  return (
    <div className='users-list'>
        <ul className='lists'>
          <li>{props.username}  {` (${props.age} years old)`} {`study in ${props.college} college`} </li>
        </ul>
    </div>
  )
}

export default ShowUsers