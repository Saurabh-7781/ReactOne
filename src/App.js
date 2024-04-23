
import React from 'react'
import {Route , Routes} from 'react-router-dom'
import './App.css';
import Contact from './Contact'
import About from './About'
import  Home from './Home'


function App() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>
  );
}

export default App;
