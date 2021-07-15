import express from "express";
import mongoose from "mongodb";

//App Config
const app = express();
const port = process.env.PORT || 8080;
const connection_url = "mongodb+srv://admin:Sparsh@123@cluster0.escn4.mongodb.net/Blaze?retryWrites=true&w=majority";

//Middlewares
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

app.post("/blaze/card",(req,res) => {
    const dbcard = req.body;

    Cards.create(dbcard,(err,data)=>{
        
    })
})
//Listeners
app.listen(port, () => {
    console.log("Listening On Port 8080!!!")
})