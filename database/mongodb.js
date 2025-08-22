import { DB_URI, NODE_ENV} from "../config/env.js";
import mongoose from "mongoose";

if(!DB_URI) {
    // this is uncaught error, so Node js Ruin-time stop the program and print the stack trace for debugging
    // use try catch to handle it. but here it's not necessary.
    throw new Error('Please define the MongoDB URI environment variable inside .env.<development/production>.local');
}

const connectToDatabase = async ()=> {
    try{
        await mongoose.connect(DB_URI);
        console.log(`Connected to database in ${NODE_ENV} mode`)

    }catch(error){
        console.error(error);
        //Used to end the entire Node.js process immediately.
        process.exit(1);
    }
}

export default connectToDatabase;