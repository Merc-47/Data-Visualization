
const express = require("express")
const { connectToDb, getDb } = require('./Controllerdb')

const app = express();

//connect to db
let db
connectToDb((err)=>{
    if(!err){
        app.listen(8080,()=>{
            console.log("app lisntnening to port 8080")
        })
        db=getDb()
    }
})
//routes
app.get('/Years',(req,res)=>{
    let Years=[]

    db.collection('TotalYears')
    .find()
    .sort({Continent:1})
   .forEach(Year=>Years.push(Year))
    .then(()=>{
       res.status(200).json(Years)
    })
    .catch(()=>{
       res.status(500).json({error:'could not fetch document'})
   })
})
//html rendering
app.use(express.static(__dirname));

app.get("/", (req, res) => {
 res.sendFile(__dirname + '/Viewindex.html');

});