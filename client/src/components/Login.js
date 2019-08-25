import React, {useState} from "react";
import axios from 'axios';

const Login = (props) => {

  // to store state
  const [credentials, setCredentials] = useState( { username: '', password: ''});

  // make a post request to retrieve a token from the api
  const login = event => {
    console.log('logging in');
    event.preventDefault();
    console.log('posting the following credentials: ', {credentials});
    // 
    axios
    .post('http://localhost:5000/api/login', credentials)
    .then(response => {
        console.log('response value: ', response);
        localStorage.setItem('token', response.data.payload);
        console.log('props line 22: ', props);

        // to redirect to list of friends
        props.history.push('/friendslist');
    })
    .catch(error => {
        console.log('error: ', error);
    }
    )
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
      <button> log in </button>
    </form>
  );
};

export default Login;
