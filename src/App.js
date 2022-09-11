import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Detail from './pages/Detail';
import Checkout from './pages/Checkout';
import CartProvider from './context/CartContext'

function App() {
  return (
    <CartProvider >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>     
          <Route path="/category/:categoryId" element={<Products />}/>
          <Route path="/item/:id" element={<Detail />} />  
          <Route path="/contacto" element={<Contact />}/>   
          <Route path="/about" element={<About />}/>   
          <Route path='/cart' element={<Checkout />}/>
          <Route path="*" element={<h1>ERROR 404 -  pagina no encontrada</h1>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
