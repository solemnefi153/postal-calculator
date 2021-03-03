const express = require('express');
const bodyParser = require('body-parser');
const app = express();



//Midleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Endpoints
app.use('/', require('./routes/root/index.js'));

//Get the port form the environment or set it to 8000
const port = process.env.PORT || 8000

app.listen(port, function(){
    console.log(`Listening on port ${port}!`);
});
