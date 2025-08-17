import express from 'express';
import {PORT} from "./config/env.js";

const app = express();

app.get('/', (req, res)=>{
    res.send('Welcome to the Personal Projects');
})
app.listen(PORT, ()=> console.log(`Server started on port: ${PORT}`)
);
