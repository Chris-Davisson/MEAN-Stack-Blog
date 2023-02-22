const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cors = require('cors');
const app = express();


app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
    res.setHeader('Access-Control-Allow-Headers', 'Content-type','Application/JSON')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})

app.use(express.json());
app.use(routes);
app.use(cors());

databaseName = "resumeBlog";
port = 3000;

//Temp??
mongoConnection = 'mongodb://127.0.0.1:27017/' + databaseName;

mongoose.connect(mongoConnection , (err)=>{
    if(err){
        throw err;
    }
    console.log('Database is connected to database: ' , databaseName);
})


app.listen(port, ()=>{
    console.log("Server is running on port: " , port);
}
)
