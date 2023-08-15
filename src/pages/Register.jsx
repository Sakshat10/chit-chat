import React, { useState } from 'react';
import add from "../img/addAvatar.png"
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth } from "../firebase";

const Register = () => {

  const handleSubmit = async (e)=>{

    const [err,setErr] = useState(false);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password= e.target[2].value;
    const file = e.target[3].files[0];

    try{
      const res = await  createUserWithEmailAndPassword(auth, email, password)
    }
    catch(err){
      setErr(true);
    }




  }
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chit Chat</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Display Name' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <input style={{display:"none"}}type="file" id="file"/>
            <label htmlFor="file">
                <img src={add} alt="add-photo"/>
                <span>Add a avatar</span>
            </label>
            <button>Sign Up</button>
            {err && <span>Something Went Wrong</span>}
            </form>
         <p>Already have a account? Login </p>

        </div>
    </div>
  )
}

export default Register
