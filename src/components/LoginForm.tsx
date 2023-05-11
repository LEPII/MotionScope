import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div>
      {/* Log In Form  */}

      <h2>Log In</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="mail"> Username or Email: </label>
        <input required type="email" name="email" />
        <label htmlFor="password"> Password:</label>
        <input required type="password" name="password" />
      </form>

      <span>Not Registered?</span>
      <Link to={"/sign-up"}>
        <button>Sign Up</button>
      </Link>

      {/* 3 Part SignUp Form  / Part 1 */}
    </div>
  );
};

export default LoginForm;
