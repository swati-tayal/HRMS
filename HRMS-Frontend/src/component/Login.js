import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () =>{
    // const [name, setName]=useState('');
    const [password, setPassword]=useState('');
    const [email, setEmail]=useState('');
    const navigate = useNavigate();
    
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    })

    const login =async ()=>{
        let result =await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({password,email}),
            headers:{
                'Content-Type':'application/json'
            },
        })
        result =await result.json();
        console.log(result)
        if(result.name){
            localStorage.setItem('user',JSON.stringify(result))
            navigate('/')
        }else{
            alert("please enter correct details")
        }
    }

    return(
        <div className="signup">
            <h1>Login Page</h1>
            <input className="inputBox" value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter Email" />
            <input className="inputBox" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password" />
            <button onClick={login} className="btn-sign">Login</button>
        </div>
    )
}

export default Login;