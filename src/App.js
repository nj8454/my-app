import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, {useState} from'react'
import Alert from './components/Alert';
//import {Routes, Route} from "react-router-dom";
  
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';  // Change the background color to white for dark mode.  // Add a condition to check the mode and change the background color accordingly.  // Use JavaScript to change the background color.  // Use a CSS class to change the background color.  // Use a CSS variable to change the background color.  // Use a CSS property to change the background color.  // Use a CSS mixin to change the background color.  // Use
      showAlert("Light mode is enabled", "success");
    }  
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
      setAlert({
        msg:message, 
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  return (
    <>
      <Navbar title ="My-app" mode={mode} toggleMode={toggleMode}/>   
      <Alert alert={alert}/>
      <div className='container my-3' >
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
      {//<Routes>
       // <Route path="/about" element={<About/>}/>
       // <Route path="/" element={}/>
      //</Routes>
      }
      </div>
    </>
  );
}

export default App;
