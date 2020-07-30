const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});

app.use('/css',express.static('css'));

//this is the port at which the application will be deployed
const port = 5000;

app.listen(port,(err)=>{
    if(err){
        console.log('Error occured while initializing application');
    }else{
        console.log(`Application is successfully running on port ${port}`);
    }
});