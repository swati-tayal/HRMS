import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const Nav=()=>{
    const auth=localStorage.getItem('user');
    // console.log("aaa", auth);
    const navigation =useNavigate();
    const logout = ()=>{
        // console.log("logout");
        localStorage.clear();
        navigation("/signUp");
    }
    return(
        <div>
            <img alt="logo" src={require('../logo.png')} className="logo"/>
            {
            auth?
            <ul className="nav-ul">
                {/* <li><Link to="/">Products</Link></li> */}
                {/* <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li> */}
                <li><Link to="/interviewers">Interviewers</Link></li>
                <li><Link to="/candidates">Candidates</Link></li>
            <li className="logout"><Link onClick={logout} to="/signUp">Logout ({JSON.parse(auth).name})</Link></li>
                
            </ul>
            :
            <ul className="nav-ul nav-right">
                <li><Link to="/signUp">SignUp</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            }
        </div>
    )
}

export default Nav;