import React, { useState } from 'react';
import { Link } from "react-router-dom";


const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    user_email: "",
    user_password: "",
  })



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };


  return (
    <div>
      <h2>Log In</h2>
          <form
        onSubmit={handleSubmit}>        
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
      <button >  <Link to={"sign-up"}>Sign Up</Link> </button>
    </div>
  );
};

export default LoginForm;