import { initializeApp } from "firebase/app";
import "firebase/auth" 
import { getAuth } from "firebase/auth"

const firebase = initializeApp ({
 apiKey: "AIzaSyCMwMrKWG9RN5KjTLNiSBI22V0Edjok-aU",
  authDomain: "motionscope-a99a6.firebaseapp.com",
  projectId: "motionscope-a99a6",
  storageBucket: "motionscope-a99a6.appspot.com",
  messagingSenderId: "630531051868",
  appId: "1:630531051868:web:21edef434faee656eaf199",
  measurementId: "G-19Y620Y7RN"
});

export const auth =  getAuth(firebase);
export default firebase