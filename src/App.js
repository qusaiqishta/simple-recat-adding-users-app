import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UserList';
function App() {
const [users,setUsers]=useState([]);
const addUserHandler=(uName,uAge)=>{
  setUsers(prevState=>{
    return [...prevState,{name:uName,age:uAge,key:Math.random()}]
  })
}
  return (
    <>
  <AddUser onAddUser={addUserHandler}/>
  <UsersList users={users}/>
    </>
  );
}

export default App;
