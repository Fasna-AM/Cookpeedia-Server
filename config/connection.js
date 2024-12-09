const mongoose = require('mongoose')

const connectionString = process.env.CONNECTION_STRING

mongoose.connect(connectionString).then(res=>{
    console.log("Mongodb Atlas successfully connected with Cookpeedia Server");
    
}).catch(err=>{
    console.log("Mongodb Atlas Connection Failed!!!");
    console.log(err);
})