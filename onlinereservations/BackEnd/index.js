

import  express  from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";


const app = express();

mongoose.set('strictQuery', true);

const url = "mongodb+srv://haris:123@cluster0.qjlwbes.mongodb.net/?retryWrites=true&w=majority";
 

mongoose.set('strictQuery', true);
mongoose.connect(url)
.then(() => console.log("connected.."))
.catch((err) => console.log(err.message))
 


app.use(cors ());
app.use(bodyParser.json( {extended: true}));
app.use(bodyParser.urlencoded ({extended: true}));


app.listen(3000);
console.log("after....")
