import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

const PrivateComponent = () =>{
    const auth=localStorage.getItem('user');
    console.log(JSON.parse(auth).role)
    if (JSON.parse(auth).role==="admin") {
        return <Outlet />
    } else if (JSON.parse(auth).role==="interviewer") {
        console.log("here")
        return <Navigate to="/dashboard" />
    } else {
        return <Navigate to="/auth" />
    }
}

export default PrivateComponent;