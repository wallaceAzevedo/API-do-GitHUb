import logo from './logo.jpg';
import './App.css';
import React, {useState} from 'react';
import Profile from "./components/Profile"

function App() {
  return (
    <div className="App">
     <hender className="app-header">
       <img src={logo} className="app-logo" alt="logo"/>
     </hender>
     <Profile/>

    </div>
  );
}

export default App;
