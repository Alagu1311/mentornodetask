import express from 'express';
import { Mainrouter } from './Router.js';
const app = express()
const port = 8000;

 
app.use(express.json())

app.use("/studmenlist", Mainrouter)


app.listen(port,()=>console.log(`sever runs in local host ${port}`))




