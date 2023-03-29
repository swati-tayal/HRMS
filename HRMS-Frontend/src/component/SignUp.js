// import React, {useState, useEffect} from 'react';
// import {useNavigate} from 'react-router-dom';

// const SignUp = () =>{
//     const [name, setName]=useState('');
//     const [password, setPassword]=useState('');
//     const [email, setEmail]=useState('');
//     const navigate = useNavigate();
    
//     useEffect(()=>{
//         const auth=localStorage.getItem('user');
//         if(auth){
//             navigate('/')
//         }
//     })

//     const submit =async ()=>{
//         console.warn(name, password, email);
//         let result =await fetch('http://localhost:5000/register',{
//             method:'post',
//             body:JSON.stringify({name,password,email}),
//             headers:{
//                 'Content-Type':'application/json'
//             },
//         })
//         result =await result.json();
//         console.log(result)
//         localStorage.setItem('user',JSON.stringify(result))
//         // if(result){
//         navigate('/')
//         // }
//     }

//     return(
//         <div className="signup">
//             <h1>Register</h1>
//             <input className="inputBox" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Name" />
//             <input className="inputBox" value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter Email" />
//             <input className="inputBox" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password" />
//             <button onClick={submit} className="btn-sign">Sign Up</button>
//         </div>
//     )
// }

// export default SignUp;