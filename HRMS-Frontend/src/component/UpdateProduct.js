import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom'

const UpdateProduct = () =>{
    const [name, setName]=useState('');
    const [price, setPrice]=useState('');
    const [category, setCategory]=useState('');
    const [company, setCompany]=useState('');
    const [error, setError]=useState('');
    const params = useParams();
    const navigation = useNavigate();

    useEffect(()=>{
        getProductDetail();
    },[])
    
    const getProductDetail =async ()=>{
        let result =await fetch(`http://localhost:5000/product/${params.id}`)
        result =await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }
    
    const updateProductDetail =async ()=>{
        if(!name || !price || !category || !company){
            setError(true);
            return false
        }
        let result =await fetch(`http://localhost:5000/product/${params.id}`,{
            method:'put',
            body:JSON.stringify({name,price,category, company}),
            headers:{
                'Content-Type':'application/json'
            },
        })
        result =await result.json();
        navigation('/');
    }

    return(
        <div className="signup">
            <h1>Update Product</h1>
            <input className="inputBox" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Name" />
            {error && !name && <span className="error">Enter valid name</span>}
            <input className="inputBox" value={price} onChange={(e)=>setPrice(e.target.value)} type="text" placeholder="Enter price" />
            {error && !price && <span className="error">Enter price</span>}
            <input className="inputBox" value={category} onChange={(e)=>setCategory(e.target.value)} type="text" placeholder="Enter category" />
            {error && !category && <span className="error">Enter valid category</span>}
            <input className="inputBox" value={company} onChange={(e)=>setCompany(e.target.value)} type="text" placeholder="Enter company" />
            {error && !company && <span className="error">Enter valid campany name</span>}
            <button onClick={updateProductDetail} className="btn-sign">Update Product</button>
        </div>
    )
}

export default UpdateProduct;