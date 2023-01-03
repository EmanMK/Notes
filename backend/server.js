require('dotenv').config() //npm instate dotenv , package to let us use .env secret file, process.env.CONST
const express = require('express');
const mongoose = require('mongoose');
//express app
const app =express();

const noteRoutes = require('./routes/notes.js')


app.use(express.json())

//global request middleware
app.use((req, res, nextMiddle)=>{
    console.log(req.path, req.method);
    nextMiddle()
})

app.use('/home',noteRoutes)


//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for requests
        app.listen(process.env.PORT,()=>{
        console.log(`listening on port ${process.env.PORT}`)
    })
    })
    .catch((error)=>{
        console.log('there is error',error)
    })




