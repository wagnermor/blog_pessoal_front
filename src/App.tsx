import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/Store';

import './App.css';

import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import TesteGrid from './pages/teste/TesteGrid';
import TesteFwlexBox from './pages/teste/TesteFlexBox';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagens from './components/postagens/listapostagem/ListaPostagem';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <div className="App">
        <Router>
          <Navbar />
          <div style={{minHeight:'80vh'}}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
              <Route path="/temas" element={<ListaTema />} />
              <Route path="/posts" element={<ListaPostagens />} />
              <Route path="/teste-grid" element={<TesteGrid />} />
              <Route path="/teste-flexbox" element={<TesteFwlexBox />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}
