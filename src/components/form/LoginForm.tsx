import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  
const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    //
  };

  return (
    <div>
      {/* Log In Form  */}
      
      <h2>Log In</h2>
      <form >
        <label htmlFor="mail"> Username or Email: </label>
        <input required type="email" name="email" />
        <label htmlFor="password"> Password:</label>
        <input
          required
          type="password"
          name="password"
        />
      </form>

      <span>Not Registered?</span>
      <button>Sign Up</button>

      {/* 3 Part SignUp Form  / Part 1 */}
    </div>
  );
};

export default LoginForm;