import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import MainLayout from './layouts/MainLayout';
import './App.scss'

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/contacts" element={<Contacts/>}/>
        <Route  path="/register" element={<RegisterPage/>}/>
      </Route>
    </Routes>
  )
}

export default App;
