import React from "react";
import { useState } from "react";
import axios from "axios";

const projectID = "4d3516a6-e9a7-4c74-86aa-a7de1aaabf55";

const Modal = () => {

const [username, setUsername] = useState("");
const [password, setPassword ] = useState("");
const [error, setError] = useState("");


const handleSubmit = async(e) => {
  e.preventDefault();

   const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };


  try {

    await axios.get('https://api.chatengine.io/chats', { headers: authObject });

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    window.location.reload();
    setError("");

  } catch (err) {
    setError("Oops, Invalid Credentials...");
  }
};

  return(
    <div className="wrapper">
     <div className="form">
      <h1 className="title">Conversations</h1>
      <form onSubmit={handleSubmit}>
       <input
       type ="text"
       className= "input"
       value= {username}
       placeholder="testuser"
       onChange= {(e) => {setUsername(e.target.value)}}
       required 
       />

       <input
       type="text"
       className= "input"
       value= {password}
       placeholder="12345678"
       onChange = {(e) => {setPassword(e.target.value)}}
       required />
    
      <div align="center">
        <button type ="submit" className="button">
         <span>Let's talk!</span>
        </button>
       </div>
      </form>
     <h1>{error}</h1>
   </div>
  </div>
  );
};

export default Modal;