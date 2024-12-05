import { getAuth,  } from "firebase.js";

let registerBtn = document.getElementById("registerBtn")
let register = ()=>{
    const email = document.getElementById("Email")
    const password = document.getElementById("Password")
    createUserWithEmailAndPassword(auth, email,value, password,value)
  .then((userCredential) => {
   
    const user = userCredential.user;
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  
  });

}