import React,{useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser=(props)=>{
    const [enteredUserName,setenteredUserName]=useState('');
    const [enteredAge,setEnteredAge]=useState('');
    const [error,setError]=useState();
    const changeuserNameHandler=(event)=>{
        setenteredUserName(event.target.value);
    }

    const chnageAgeHandler=(event)=>{
        setEnteredAge(event.target.value);
    }

    const addUserHandler=(event)=>{
        event.preventDefault();
        if(enteredUserName.trim().length==0&&+enteredAge<1){
            setError({title:'Invalid input',message:'UserName and age can not be empty'});
        }
        else if(enteredUserName.trim().length==0){
            setError({title:'Invalid userName',message:'UserName can not be empty'});
        }

        else if(+enteredAge<1){
            setError({title:'Invalid age',message:'age must be more than one year'})
        }
        props.onAddUser(enteredUserName,enteredAge);
        setenteredUserName('');
        setEnteredAge('');
    }
    const errorHandler=()=>{
        setError(null)
    }

 return(
    <div>
    {error&& <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="userName">UserName</label>
        <input type='text' id='userName' value={enteredUserName} onChange={changeuserNameHandler}></input>
        <label htmlFor="age">Age (Years)</label>
        <input type='number' id='age' value={enteredAge} onChange={chnageAgeHandler}></input>
        <Button type="submit"> Add User</Button>
    </form>
    </Card>
    </div>
 )
}
export default AddUser;