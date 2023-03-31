import Nav from './component/Nav'; 
import './App.css';
import Footer from './component/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// import { AuthContext } from './shared/context/auth-context';
import PrivateComponent from './component/privateComponent';
import InterviewerList from './component/interviewers/pages/Interviewer';
import AddInterviewer from './component/interviewers/pages/AddInterviewer';
import InterviewerDetails from "./component/interviewers/pages/InterviewerDetails";
import CandidateList from './component/candidates/pages/Candidates';
import Interview from './component/interviews/pages/Interview';
import Auth from './auth/auth';
// import { useAuth } from './shared/hooks/auth-hook';

function App() {
  // const [ token, login, logout, userId] = useAuth();
  return (
    <div className="App">
      {/* <AuthContext.Provider value={{
        token,
        login: login,
        logout: logout,
        userId: userId
      }}> */}
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route element={<PrivateComponent/>}>
            <Route path="/interviewers" element={<InterviewerList />}></Route>
            <Route path="/candidates" element={<CandidateList />}></Route>
            <Route path="/interviewers/add" element={<AddInterviewer />}></Route>
            <Route path="/interviewers/interviewer/:interviewerId" element={<InterviewerDetails />}></Route>
            <Route path="/logout" element={<h1>Logout Component</h1>}></Route>
          </Route>
            <Route path="/profile" element={<h2>Profile</h2>}></Route>
            <Route path="/interviews" element={<Interview />}></Route>
          <Route path="/" element={<h1>home page</h1>}></Route>
          <Route path="/dashboard" element={<h1>Interviewer dashboard</h1>}></Route>
          <Route path="/auth" element={<Auth/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* </AuthContext.Provider> */}
    </div>
  );
}

export default App;