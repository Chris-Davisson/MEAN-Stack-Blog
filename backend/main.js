const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(routes);
app.use(cors( {origin: 'http://localhost:4200'}));

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
