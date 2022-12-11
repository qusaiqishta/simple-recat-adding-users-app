import React, { useState,useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
  const nameInputField = useRef();
  const ageInputField = useRef();   
  const [error, setError] = useState();
  
  const addUserHandler = (event) => {
    event.preventDefault();
    const nameFiledValue= nameInputField.current.value;
    const ageFieldValue=ageInputField.current.value;
    if (nameFiledValue.trim().length == 0 && +ageFieldValue < 1) {
      setError({
        title: "Invalid input",
        message: "UserName and age can not be empty",
      });
    } else if (nameFiledValue.trim().length == 0) {
      setError({
        title: "Invalid userName",
        message: "UserName can not be empty",
      });
    } else if (+ageFieldValue < 1) {
      setError({
        title: "Invalid age",
        message: "age must be more than one year",
      });
    }
    props.onAddUser(nameFiledValue, ageFieldValue);
   nameInputField.current.value='';
   ageInputField.current.value='';
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="userName">UserName</label>
          <input
            type="text"
            id="userName"
            ref={nameInputField}
           
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            ref={ageInputField}
           
          ></input>
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
