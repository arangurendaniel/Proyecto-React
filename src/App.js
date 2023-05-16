import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import VentanaProducto from './components/VentanaProducto';
import Contacto from './components/Contacto';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Inicio /> } />
            <Route path='/tienda' element={<ItemListContainer /> } />
            <Route path='/tienda/:categoria' element={<ItemListContainer /> } />
            <Route path='/nosotros' element={<Nosotros />}  />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/producto/:id' element={<VentanaProducto />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
