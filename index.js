import express from 'express';
import mongoose from 'mongoose'
import Dotenv  from 'dotenv'
import bodyParser from 'body-parser'
import route from './routes/useroute.js';

const app=express();
app.use(bodyParser.json());

Dotenv.config();

const PORT = process.env.PORT || 5000;

const MONGO = process.env.MONGO;

mongoose.connect(MONGO).then(() =>{
    console.log("connected successfully");
    app.listen(PORT,()=>{
        console.log('listening to ${PORT}');
    });

}).catch((error)=>console.log(error))

app.use('/api/user',route);