const express = require('express');
const cors = require("cors");
const app =express();
const mongoose = require("mongoose");
// require('./db/config'); For Swati's database connection
const User = require('./db/user');
// const Product = require('./db/product');
const interviewerRoutes = require("./routes/interviewers-routes")

app.use(express.json());
app.use(cors());

app.post("/register", async (req,res)=>{
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result)
})

app.post('/login',async (req, res)=>{
    if(req.body.email && req.body.password){
        let user = await User.findOne(req.body).select("-password");
        if(user){
            res.send(user);
        }else{
            res.send('No User Found')
        }
    }else{
        res.send('No User Found')
    }
})

app.use("/api/interviewers", interviewerRoutes);

// app.post('/add-product',async (req, res)=>{
//     let product = new Product(req.body);
//     let result = await product.save();
//     res.send(result)
// })

// app.get("/products", async (req, res)=>{
//     let products = await Product.find();
//     if(products.length>0){
//         res.send(products)
//     }else{
//         res.send({result:"No product found"})
//     }
// });

// app.delete('/product/:id', async(req,res)=>{
//     const result = await Product.deleteOne({_id:req.params.id});
//     res.send(result)
// })

// app.get('/product/:id', async(req,res)=>{
//     const result = await Product.findOne({_id:req.params.id});
//     if(result){
//         res.send(result)
//     }else{
//         res.send({result:'no record found'})
//     }
// })

// app.put('/product/:id', async(req,res)=>{
//     const result = await Product.updateOne(
//         {_id:req.params.id},
//         {$set:req.body}
//     );
//     res.send(result)
// })

// app.get('/search/:key', async(req,res)=>{
//     const result = await Product.find({
//         "$or":[
//             {name:{$regex:req.params.key}}
//         ]
//     });
//     res.send(result)
// })

// app.listen(5000); For Swati's database connection
mongoose
  .connect(
    "mongodb+srv://praveen:NPXI73sK0MTXOSzB@cluster0.jfruq7o.mongodb.net/hrms?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
