import express from 'express';
import {PORT} from "./config/env.js";

import userRoouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectToDatabase from "./database/mongodb.js";

const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRoouter);
app.use('/api/v1/subscription', subscriptionRouter);

app.get('/', (req, res)=>{
    res.send('Welcome to the Personal Projects');
})
app.listen(PORT, async ()=> {
        console.log(`Server started on port: ${PORT}`)
    await connectToDatabase();
});
