import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
// import { Post } from '../adaptor';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const postData = async(e) => {
    e.preventDefault()
    // Login
    const auth = getAuth(app);
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("hyyyyyy")
        const user = userCredential.user;
        console.log(user)
        navigate('/home')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <>
      <div className="login">
        <form action="" onSubmit={postData}>
          <input
            type="email"
            className="font-size"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="font-size"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="font-size">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
