import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
