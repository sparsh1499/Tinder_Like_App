import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import Cards from "./dbcards.js";

//App Config
const app = express();
const port = process.env.PORT || 8080;
const connection_url = "mongodb://admin:DV8vas1hZYVIu3BB@cluster0-shard-00-00.escn4.mongodb.net:27017,cluster0-shard-00-01.escn4.mongodb.net:27017,cluster0-shard-00-02.escn4.mongodb.net:27017/BLAZE?ssl=true&replicaSet=atlas-rm8asd-shard-0&authSource=admin&retryWrites=true&w=majority";

//Middlewares
app.use(express.json());
app.use(Cors());

//Db Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

//API EndPoints
app.get("/", (req, res) => {
    res.status(200).send("Hello Sparsh!!");
})

app.post("/blaze/cards",(req,res) => {
    const dbcard = req.body;

    Cards.create(dbcard,(err,data)=>{
        if(err){
            res.status(500).send(err);
            console.log(err);
        }else{
            res.status(201).send(data)
        }
    })
})

app.get("/blaze/cards",(req,res) => {

    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err);
            console.log(err);
        }else{
            res.status(200).send(data)
        }
    })
})
//Listeners
app.listen(port, () => {
    console.log("Listening On Port 8080!!!")
})