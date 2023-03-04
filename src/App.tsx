import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Teste from './pages/teste/Teste';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/teste" element={<Teste />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
