import { useState } from 'react';
import NewUser from './components/NewUsers/NewUser';
import Users from './components/Users/Users';


function App() {
  const[users,setUsers]= useState([]);
  const addUserHandler=(newUser)=>{
        setUsers((prevState)=>{
          return [...prevState,newUser];
        })
        console.log(users);
        console.log(newUser);
  }
  console.log(users);
  return (
    <div className="App">
   <NewUser addUser={addUserHandler}/>
   <Users users={users}/>
    </div>
  );
}

export default App;
