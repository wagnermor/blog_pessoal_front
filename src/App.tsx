import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ThemeProvider, Button, styled } from '@mui/material';

import './App.css';

import { LightTheme } from './themes';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import TesteGrid from './pages/teste/TesteGrid';
import TesteFwlexBox from './pages/teste/TesteFlexBox';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div style={{minHeight:'80vh'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/teste-grid" element={<TesteGrid />} />
            <Route path="/teste-flexbox" element={<TesteFwlexBox />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
