import { Routes, Route, Link } from 'react-router';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contacts from './pages/Contacts';
import MyButton from './components/MyButton';
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      {/* <MyButton text={'Hello world'}/> */}
    </>
  )
}

export default App
