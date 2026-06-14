import './App.css'
import AboutUs from './components/AboutUs'
import { Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

function App() {
  return (
    <>
      <Routes>
        <Route path='/e-plantShopping/' element={<AboutUs />} />
        <Route path='/e-plantShopping/home' element={<AboutUs />} />
        <Route path='/e-plantShopping/products' element={<ProductList />} />
        <Route path='/e-plantShopping/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
