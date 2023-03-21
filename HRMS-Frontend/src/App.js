import Nav from './component/Nav'; 
import './App.css';
import Footer from './component/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './component/SignUp';
import Login from './component/Login';
import AddProduct from './component/AddProduct';
import ProductList from './component/ProductList';
import UpdateProduct from './component/UpdateProduct';
import PrivateComponent from './component/privateComponent';
import Interviewers from './interviewers/pages/Interviewer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route element={<PrivateComponent/>}>
            <Route path="/" element={<ProductList/>}></Route>
            <Route path="/add" element={<AddProduct/>}></Route>
            <Route path="/update/:id" element={<UpdateProduct/>}></Route>
            <Route path="/logout" element={<h1>Logout Component</h1>}></Route>
            <Route path="/profile" element={<h1>profile Component</h1>}></Route>
          </Route>
          <Route path="/signUp" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/interviewers" element={<Interviewers />}></Route>
          {/* <Route path="/interviewers/:id" element={Interviewers}></Route> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;