import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBXyBxstCvWXGxNid8DeN2mR5H6C8fagmM",
  authDomain: "zolute-d123.firebaseapp.com",
  projectId: "zolute-d123",
  storageBucket: "zolute-d123.appspot.com",
  messagingSenderId: "132413080426",
  appId: "1:132413080426:web:8ca98ddbecae8c2f719b13",
  measurementId: "G-Y157WTMGC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getAnalytics(app);



// sign up
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


// Login
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


export {db}