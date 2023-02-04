// import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { app } from "../firebase";

const Register = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  // navigate('/')

  const postData = async (e) => {
    e.preventDefault();
    // sign up
    const auth = getAuth(app);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user)
        navigate('/')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <>
      <div className="register">
        <form action="" onSubmit={postData}>
          {/* <input type="text" className='font-size' placeholder='Username' onChange={(e)=>setUsername(e.target.value)} required/> */}
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
            
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
