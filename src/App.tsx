import './App.css';

import Home from './components/Home/home';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
