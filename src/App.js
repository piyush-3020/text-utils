import './App.css'
import Navbar from './Navbar';
import TextForm from './Textform';
import React, { useState } from 'react';
import Alert from './Alert';
import About from './About';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#000033';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title = "TextUtils" aboutText = "About" mode = {mode} toggleMode={toggleMode} />
    <Alert alert = {alert} />
    <div className="container my-3">
        <Routes>
          <Route exact path="/about"  element={<About mode={mode}/>}>
          </Route>
          <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
          </Route>
        </Routes>
    </div>
    </Router>
  </>
  );
}

export default App
