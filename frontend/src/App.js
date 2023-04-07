import { Route, Routes } from 'react-router-dom'
import PATH from './services/paths'
import Home from './pages/Home';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import ProductDetails from './pages/ProductDetails';
import 'bootstrap/dist/js/bootstrap';
import './sass/index.sass'

const App = () => {
  return (
    // <Home/>
    <Routes>
      <Route path={PATH.HOME} element={<Home />} />
      <Route path={PATH.PRODUCTS} element={<Products />} />
      <Route path={PATH.ABOUTUS} element={<AboutUs />} />
      <Route path={`${PATH.PRODUCTS}/:name`} element={<ProductDetails />}/>
    </Routes>
  )
}

export default App;
