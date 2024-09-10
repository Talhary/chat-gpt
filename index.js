const express = require('express');
const { getData } = require('./lib');
const app = express();
require('dotenv').config();
app.use(express.json())

const port = process.env.PORT || 5000;
app.post('/gpt',async(req,res)=>{
    try {
        const {message,input} = req.body;
        console.log({message,input})
        const data = await getData(message,input)
        res.json(data)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
    
})
app.listen(port,()=>{
    console.log('server is listning to port http://localhost:'+ port)
})