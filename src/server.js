const express = require('express');
const path = require('path');
const app = express();

//Other Settings 
// app.use(express.static(path.join(__dirname, 'public')));
// console.log(path.join(__dirname, '/public'));

//Endpoints
app.use('/', require('./routes/index.js'));


//Get the port form the environment or set it to 8000
port = process.env.NODE_ENV || 8000

app.listen(port, function(){
    console.log(`Listening on port ${port}!`);
});
