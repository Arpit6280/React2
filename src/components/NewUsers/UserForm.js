import React, { useState } from 'react'
import './UserForm.css'
import ErrorModal from './ErrorModal';

function UserForm(props) {
  const[username,setUsername]=useState('');
  const [age,setAge]=useState('');
  const [error,setError]=useState('');

  const changeName=(e)=>{
 setUsername(e.target.value);
  }
  const changeAge=(e)=>{
 setAge(e.target.value)
  }

 const submitHandler =(e)=>{
    e.preventDefault();
    if(username.trim().length===0 || age.trim().length===0){
      setError({
        title:'Invalid Input',
        message:'Please Enter a valid name and age (non empty values)'
      })
      return;
    }
    else if(age<1){
      setError({
        title:'Invalid Age',
        message:'Please Enter age greater than 0 (age>0)'
      })
    }
   else{ let user={
      username:username,
      age:age
    }
    console.log(user);
    props.onSaveUserData(user);
  }
  }

  const errorHandler=()=>{
    setError(null)
  }
  return (
        <div>
    {error &&  <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}   
        <form action="" onSubmit={submitHandler}>
            <div className='new-user__controls'>
            <div className='new-user__control'>
                <label>Username</label>
                <input type="text" value={username} onChange={changeName} />
            </div>
            <div className='new-user__control'>
                <label>Age (years)</label>
                <input type="text" value={age} onChange={changeAge} />
            </div>
            <div className='new-user__actions'>
            <button>Add User</button>
            </div>
            </div>
        </form>
        </div>

  )
}

export default UserForm