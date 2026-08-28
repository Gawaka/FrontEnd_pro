import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AddExcuse from './pages/AddExcuse/AddExcuse';
import Contacts from './pages/Contacts/Contacts';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import MainLayout from './layouts/MainLayout';
import './App.scss'

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home/>}/>
        <Route  path="/addExcuse" element={<AddExcuse/>}/>
        <Route  path="/contacts" element={<Contacts/>}/>
        <Route  path="/register" element={<RegisterPage/>}/>
      </Route>
    </Routes>
  )
}

export default App;
