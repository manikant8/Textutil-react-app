import React, { useState } from 'react';
// import { Routes, Route} from "react-router-dom";
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [mode, setMode] = useState('light'); //hook for there

  const [alert, setalert] = useState(false); //hook for alert pop-up

  const [button, setButton] = useState("primary") //hook for buttons as per theme 

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null)  //`false` will also work in place of `null`
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode enabled", "dark");
      setButton("dark");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "info", "primary");
      setButton("primary");
    }
  }

  return (
    <>
      <Navbar appName='Textutil123' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm heading='Enter text to analyse' mode={mode} btn={button} showAlert={showAlert} />
      {/* <Routes>
        <Route path="/" element={<TextForm heading='Enter text to analyse' mode={mode} btn={button} showAlert={showAlert} />} />
        <Route path='/about' element={<About />} />
      </Routes> */}
    </>
  );
}

export default App;
