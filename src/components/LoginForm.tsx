import React, { useState } from "react";

const LoginForm = () => {
  

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