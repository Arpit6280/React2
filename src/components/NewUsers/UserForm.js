//Controlled Components
// import React, { useState } from 'react'
// import './UserForm.css'
// import ErrorModal from './ErrorModal';
// import Wrapper from '../Helper/Wrapper';


// function UserForm(props) {
//   const[username,setUsername]=useState('');
//   const [age,setAge]=useState('');
//   const [error,setError]=useState('');

//   const changeName=(e)=>{
//  setUsername(e.target.value);
//   }
//   const changeAge=(e)=>{
//  setAge(e.target.value)
//   }

//  const submitHandler =(e)=>{
//     e.preventDefault();
//     if(username.trim().length===0 || age.trim().length===0){
//       setError({
//         title:'Invalid Input',
//         message:'Please Enter a valid name and age (non empty values)'
//       })
//       return;
//     }
//     else if(age<1){
//       setError({
//         title:'Invalid Age',
//         message:'Please Enter age greater than 0 (age>0)'
//       })
//     }
//    else{ let user={
//       username:username,
//       age:age
//     }
//     console.log(user);
//     props.onSaveUserData(user);
//   }
//   }

//   const errorHandler=()=>{
//     setError(null)
//   }
//   return (
//         <React.Fragment>
//     {error &&  <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}   
//         <form action="" onSubmit={submitHandler}>
//             <div className='new-user__controls'>
//             <div className='new-user__control'>
//                 <label>Username</label>
//                 <input type="text" value={username} onChange={changeName} />
//             </div>
//             <div className='new-user__control'>
//                 <label>Age (years)</label>
//                 <input type="text" value={age} onChange={changeAge} />
//             </div>
//             <div className='new-user__actions'>
//             <button>Add User</button>
//             </div>
//             </div>
//         </form>
//         </React.Fragment>

//   )
// }

// export default UserForm




//Uncontrolled Components
import React, { useState,useRef } from 'react'
import './UserForm.css'
import ErrorModal from './ErrorModal';


function UserForm(props) {
  const nameInputRef=useRef();
  const ageInputRef=useRef();
  const collegeInputRef=useRef();

  const [error,setError]=useState('');


 const submitHandler =(e)=>{
    e.preventDefault();
    console.log(nameInputRef);
    const enteredName=nameInputRef.current.value;
    const enteredAge=ageInputRef.current.value;
    const enteredCollege=collegeInputRef.current.value

    if(enteredName.trim().length===0 || enteredAge.trim().length===0 || enteredCollege.trim().length===0){
      setError({
        title:'Invalid Input',
        message:'Please Enter a valid name, age and college name(non empty values)'
      })
      return;
    }
    else if(enteredAge<1){
      setError({
        title:'Invalid Age',
        message:'Please Enter age greater than 0 (age>0)'
      })
    }
   else{ let user={
      username:enteredName,
      age:enteredAge,
      college:enteredCollege
    }
    props.onSaveUserData(user);
    nameInputRef.current.value='';
    ageInputRef.current.value='';
    collegeInputRef.current.value='';
  }
  }

  const errorHandler=()=>{
    setError(null)
  }
  return (
        <React.Fragment>
    {error &&  <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}   
        <form action="" onSubmit={submitHandler}>
            <div className='new-user__controls'>
            <div className='new-user__control'>
                <label>Username</label>
                <input type="text"  ref={nameInputRef} />
            </div>
            <div className='new-user__control'>
                <label>Age (years)</label>
                <input type="text" ref={ageInputRef} />
            </div>
            <div className='new-user__control'>
                <label>College Name</label>
                <input type="text" ref={collegeInputRef} />
            </div>
            <div className='new-user__actions'>
            <button>Add User</button>
            </div>
            </div>
        </form>
        </React.Fragment>

  )
}

export default UserForm