import React, {useState} from "react";
import axios from 'axios';

const Login = () => {

  // to store state
  const [credentials, setCredentials] = useState( { username: '', password: ''});

  // make a post request to retrieve a token from the api
  const login = event => {
    console.log('logging in');
  }

  // to update the state when values change
  const handleChange = event => {
    console.log('handling change');
    setCredentials({...credentials, [event.target.name]: event.target.value}
      );
  }

  // when you have handled the token, navigate to the BubblePage route


  return (
    <form onSubmit={login}>
      <h1> Login: </h1>
      <input type = 'text' name = 'username' placeholder = 'username' value = {credentials.username} onChange = {handleChange} />
      <input type = 'password' name = 'password' placeholder = 'password' value = {credentials.password} onChange = {handleChange} />
    </form>
  );
};

export default Login;
