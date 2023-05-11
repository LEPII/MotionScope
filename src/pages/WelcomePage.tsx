import React, {useState} from 'react'
import LoginForm from '../components/form/LoginForm'
import SignUpForm from '../components/form/SignUpForm'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const WelcomePage = () => {

  const [modalType, useModalType] = useState(false);


const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
  } else {
    // User is signed out
    // ...
  }
});

  return (
    <div>WelcomePage</div>
  )
}

export default WelcomePage