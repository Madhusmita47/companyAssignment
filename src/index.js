const express = require("express")
const bodyparser = require("body-parser")
const app = express()
const route=require("./route/route")
const mongoose=require("mongoose")
const multer=require("multer")


mongoose.set('strictQuery', false);
app.use(multer().any())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://madhusmita_123:5fiVrKsOKBIGJsKe@cluster0.cpbhduk.mongodb.net/Backened_project",
    { useNewUrlParser: true }
)
 .then( () =>  console.log("MongoDb is connected") )
 .catch( err => console.log(err))
  app.use('/',route)



  app.listen(process.env.PORT || 3000,function (){
    console.log('Express app running on port'+ (process.env.PORT || 3000))
  });

