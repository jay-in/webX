const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion, Collection } = require('mongodb');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors({ credentials: true, origin: ['http://localhost:4200'] }));

app.post("/contact", (req, res) => {
    console.log(req.body);
    try{
        collection.insertOne(req.body)
    }catch{
        res.json({message:"Some Error Occured"})
    }
    res.json({message:"Data inserted sucessfully"})
})

app.get("/contact",async (req,res)=>{
    let response = await collection.find({}).toArray();
    res.json(response)
})

let collection;
async function connectDb() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);
    let result = await client.connect();
    collection = client.db("test").collection("contact");
}

app.listen(4000, () => {
    console.log("Server Started");
    connectDb();
})