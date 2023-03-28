import Nav from './component/Nav'; 
import './App.css';
import Footer from './component/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './component/SignUp';
import Login from './component/Login';
// import AddProduct from './component/AddProduct';
// import ProductList from './component/ProductList';
// import UpdateProduct from './component/UpdateProduct';
import PrivateComponent from './component/privateComponent';
import InterviewerList from './component/interviewers/pages/Interviewer';
import AddInterviewer from './component/interviewers/pages/AddInterviewer';
import InterviewerDetails from "./component/interviewers/pages/InterviewerDetails";
import CandidateList from './component/candidates/pages/Candidates';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route element={<PrivateComponent/>}>
            {/* <Route path="/" element={<ProductList/>}></Route> */}
            {/* <Route path="/add" element={<AddProduct/>}></Route> */}
            {/* <Route path="/update/:id" element={<UpdateProduct/>}></Route> */}
            {/* <Route path="/profile" element={<h1>profile Component</h1>}></Route> */}
            <Route path="/interviewers" element={<InterviewerList />}></Route>
            <Route path="/candidates" element={<CandidateList />}></Route>
            <Route path="/interviewers/add" element={<AddInterviewer />}></Route>
            <Route path="/interviewers/interviewer/:interviewerId" element={<InterviewerDetails />}></Route>
            <Route path="/logout" element={<h1>Logout Component</h1>}></Route>
          </Route>
          <Route path="/signUp" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;