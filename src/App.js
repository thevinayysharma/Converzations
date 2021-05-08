import React from 'react';
import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./Components/ChatFeed";
import LoginForm from "./Components/LoginForm";

import './App.css';


const projectID = "4d3516a6-e9a7-4c74-86aa-a7de1aaabf55";


const App = ()  => {
  if (!localStorage.getItem("username")) 
  return <LoginForm />;

  return (
    <ChatEngine
    height = "100vh"
    projectID = {projectID}
    userName = {localStorage.getItem("username")}
    userSecret = {localStorage.getItem("password")}
    renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
     />
  );
}

export default App;


// features to be implemented
// signout, PWA, scrolling, Css using glassmorphism