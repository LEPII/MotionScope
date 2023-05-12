import React from 'react'
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUpForm = () => {

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

  return (
    <div>     
      <form>

                {/* 3 Part SignUp Form  / Part 1 */}


        <label htmlFor="fname"> First: </label>
        <input type="text" />
        <label htmlFor="lname"> Last: </label>
        <input type="text" />
        <label htmlFor="mail"> Email: </label>
        <input type="email" />
        <label htmlFor="password"> Password: </label>
        <input type="password" />
        <label htmlFor="password"> Confirm Password: </label>
        <input type="password" />

        {/* 3 Part SignUp Form  / Part 2 */}

        <h4> Units Preferred: </h4>
        <input type="radio" />
        <label htmlFor="unitPreferred" name="unit_preferred" value="Standard">
          Standard (Inches, Pounds, etc.)
        </label>
        <input type="radio" />
        <label htmlFor="unitPreferred" name="unit_preferred" value="Metric">
          Metric (Kilo, Centimeter, etc.)
        </label>
        <h4> Gender: </h4>
        <input type="radio" />
        <label htmlFor="gender" name="gender" value="Male">
          Male
        </label>
        <input type="radio" />
        <label htmlFor="gender" name="gender" value="Female">
          Female
        </label>

        {/* 3 Part SignUp Form  / Part 3  */}

        <label> Birthday: </label>
        <input type="date" />
        <label> Body Weight: </label>
        <input type="number" min="30" max="600" />
        <h4> How Many Years of Lifting? </h4>
        <select>
          <option htmlFor="Exp" name="years_of_exp" value="1">
            0-1 years
          </option>
          <option htmlFor="Exp" name="years_of_exp" value="2">
            1-2 years
          </option>
          <option htmlFor="Exp" name="years_of_exp" value="3">
            3-5 years
          </option>
          <option htmlFor="Exp" name="years_of_exp" value="4">
            5+ years
          </option>
        </select>
        <h4> How Many Days Do You Train? </h4>
        <select>
          <option htmlFor="training_days" name="train_days" value="1">
            1 days
          </option>
          <option htmlFor="training_days" name="train_days" value="2">
            2 days
          </option>
          <option htmlFor="training_days" name="train_days" value="3">
            3 days
          </option>
          <option htmlFor="training_days" name="train_days" value="4">
            4 days
          </option>
          <option htmlFor="training_days" name="train_days" value="5">
            5 days
          </option>
          <option htmlFor="training_days" name="train_days" value="6">
            6 days
          </option>
          <option htmlFor="training_days" name="train_days" value="7">
            7 days
          </option>
        </select>
        <label> Start Date: </label>
        <input type="date" />

        <label htmlFor="profile_pic">Choose a Profile Picture</label>
        <input
          type="file"
          id="profile_pic"
          name="profile_pic"
          accept="image/*"
        />

        <button type="submit"> Complete Profile </button>
      </form></div>
  )
}

export default SignUpForm