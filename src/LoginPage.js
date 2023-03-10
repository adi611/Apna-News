import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import firebase from "./firebase";
import { useParams } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  // const { category } = useParams();

  // useEffect(() => {
  //   // do something when the component mounts or when the category parameter changes
  // }, [category]);

  function handleLogin(event) {
    event.preventDefault();

    // Get the email and password from the state
    const emailCur = email;
    const passwordCur = password;

    console.log(emailCur, passwordCur);

    // Authenticate the user using Firebase
    firebase
      .auth()
      .signInWithEmailAndPassword(emailCur, passwordCur)
      .then(() => {
        // If authentication is successful, redirect to the news page
        console.log("Login successful");
        history.push("/news");
        window.location.reload(true);
      })
      .catch((error) => {
        // Handle any errors that occur during the authentication process
        console.log(emailCur, passwordCur);
        console.error(error);
        alert("Invalid email or password");
      });
  }

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState(null);
  // const history = useHistory();

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await firebase.auth().signInWithEmailAndPassword(email, password);
  //     setEmail('');
  //     setPassword('');
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  // useEffect(() => {
  //   const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       // navigate to the news page if the user is authenticated
  //       console.log('Login successful');
  //       history.push('/news');
  //     }
  //   });

  //   return unsubscribe;
  // }, [history]);



  return (
    <form onSubmit={handleLogin}>
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        type="password"
        label="Password"
        variant="outlined"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </form>
  );
}

export default LoginPage;
