import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from "./Pages/home.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Success from "./Pages/success.jsx";
import './App.css'
const App = () => {
  return (
    <>
      <Router>
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </>
  )
}

export default App