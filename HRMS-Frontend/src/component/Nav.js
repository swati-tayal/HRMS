import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  //   const [auth, setAuth] = useState();
  // useEffect(() => {
  //     const user = localStorage.getItem("user")
  // setAuth(JSON.parse(user))
  // // console.log("aaa", auth)

  // }, [auth])
  const navigation = useNavigate();
  const logout = () => {
    // console.log("logout");
    localStorage.clear();
    navigation("/auth");
  };
  return (
    <div>
      <ul className="nav-ul">
        {auth && JSON.parse(auth).role === "admin" && (
          <>
            <li>
              <Link to="/interviewers">Interviewers</Link>
            </li>
            <li>
              <Link to="/candidates">Candidates</Link>
            </li>
            <li>
              <Link to="/interviews">Interviews</Link>
            </li>
          </>
        )}
        {auth && JSON.parse(auth).role === "interviewer" && (
          <>
            <li>
              <Link to="/interviews">Interviews</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </>
        )}
        <div className="nav-right">
          {!auth && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {auth && (
            <li className="logout">
              <Link onClick={logout} to="/auth">
                Logout ({JSON.parse(auth).role})
              </Link>
            </li>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Nav;
