import express from 'express';

const app=express()
const expanses=[];

app.post('/expense',(req,res)=>{
    const {amount,category}=req.body;
    if(!amount){
        return res.json("amount is required")
    }
    expenses.push({ amount: parseFloat(amount), category });
    res.json("added success")
})
app.listen(4000,()=>{
    console.log("express app is running")
})