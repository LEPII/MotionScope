import {useRef} from "react"
import { Link } from "react-router-dom";

const SignUpForm = () => {

  const fnameRef = useRef<HTMLInputElement>(null);
  const lnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const firstName = fnameRef.current?.value;
    const lastName = lnameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    console.log(firstName, lastName, email, password, confirmPassword);
  };
  
  
  return (
    <div>     
         <h2>Log In</h2>
   <form onSubmit={handleSubmit}>
      <label htmlFor="fname">First:</label>
      <input type="text" id="fname" ref={fnameRef} required />

      <label htmlFor="lname">Last:</label>
      <input type="text" id="lname" ref={lnameRef} required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" ref={emailRef} required />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" ref={passwordRef} required />

      <label htmlFor="confirm_password">Confirm Password:</label>
      <input type="password" id="confirm_password" ref={confirmPasswordRef} required />

      <button type="submit">Submit</button>
            <span>Already Have an Account?</span>
      <button >  <Link to={"/"}>Log In</Link> </button>
    </form>
      </div>
      
  )
}

export default SignUpForm