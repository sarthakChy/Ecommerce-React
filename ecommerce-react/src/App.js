import Cart from './pages/Cart.jsx';
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx';
import ProductList from './pages/ProductList.jsx';
import Register from './pages/Register.jsx';
import SingleProduct from './pages/SingleProduct.jsx';
import {BrowserRouter, Route, Navigate, Routes} from 'react-router-dom'
import { useSelector } from 'react-redux';

function App() {

  const user = useSelector((state)=> state.user.currentUser);
  console.log(user)
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path = '/' element={user? <Home/> : <Navigate  to='login'/>}/>
          <Route exact path = '/product/:id' element={<SingleProduct/>}/>
          <Route exact path = '/products/:categories' element={<ProductList/>}/>
          <Route exact path = '/cart' element={<Cart/>}/>
          <Route path ='login' element={user? <Navigate to = '/' /> : <Login/>} />
          <Route path = 'register' element={user? <Navigate to = '/' />  : <Register/>}/>
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;