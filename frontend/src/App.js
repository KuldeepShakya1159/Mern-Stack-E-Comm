
import './App.css';
import Nav from './components/nav'
import {BrowserRouter,Routes , Route} from 'react-router-dom';
import Footer from './components/footer'
import Signup from'./components/signup';
import PrivateComponent from './components/privatecomponent';
import Login from "./components/login"
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
//const cors = require('cors');


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>

        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/update/:id" element={<UpdateProduct/>}/>
      
        <Route path="/profile" element={<h1>profile component</h1>}/>
        </Route>

        <Route path="/signup" element={<Signup/>}/>
        <Route path ="/login" element ={<Login/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
