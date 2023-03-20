import React, {useState} from 'react';

const AddProduct = () =>{
    const [name, setName]=useState('');
    const [price, setPrice]=useState('');
    const [category, setCategory]=useState('');
    const [company, setCompany]=useState('');
    const [error, setError]=useState('');
    
    const addProduct =async ()=>{
        if(!name || !price || !category || !company){
            setError(true);
            return false
        }
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result =await fetch('http://localhost:5000/add-product',{
            method:'post',
            body:JSON.stringify({name,price,category, company, userId}),
            headers:{
                'Content-Type':'application/json'
            },
        })
        result =await result.json();
    }

    return(
        <div className="signup">
            <h1>Add Product</h1>
            <input className="inputBox" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Name" />
            {error && !name && <span className="error">Enter valid name</span>}
            <input className="inputBox" value={price} onChange={(e)=>setPrice(e.target.value)} type="text" placeholder="Enter price" />
            {error && !price && <span className="error">Enter price</span>}
            <input className="inputBox" value={category} onChange={(e)=>setCategory(e.target.value)} type="text" placeholder="Enter category" />
            {error && !category && <span className="error">Enter valid category</span>}
            <input className="inputBox" value={company} onChange={(e)=>setCompany(e.target.value)} type="text" placeholder="Enter company" />
            {error && !company && <span className="error">Enter valid campany name</span>}
            <button onClick={addProduct} className="btn-sign">Add Product</button>
        </div>
    )
}

export default AddProduct;