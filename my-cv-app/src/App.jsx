import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contacts from './pages/Contacts';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <Header />
      
      <Box sx={{ maxWidth: 1040, mx: 'auto', p: { xs: 2, md: 4 }, display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;