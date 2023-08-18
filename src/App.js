import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    },2000);

  }
  const toggleMode = ()=>{
    if (mode === 'light' )
    {
      setMode('dark');
      document.body.style.backgroundColor = '#161616';
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title = "TextUtilz" mode={mode} toggleMode={toggleMode}  />
        <Alert alert={alert}/>
        <div className="container">
        <Routes>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze" showAlert={showAlert}  mode={mode} />}></Route>
            <Route exact path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
