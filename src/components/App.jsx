import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom"

import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
          <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
          <Route path='/carrito' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>

    </>
      
  );
}

export default App;