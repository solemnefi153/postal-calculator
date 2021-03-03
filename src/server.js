const express = require('express');
const bodyParser = require('body-parser');
const engine = require('ejs-mate');
const path = require('path');
const app = express();

//Settings 
app.engine('ejs', engine);
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

//Midleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Endpoints
app.use('/', require('./routes/root/index.js'));

//Other Settings 
app.use(express.static(path.join(__dirname, 'public')));

//Get the port form the environment or set it to 8000
const port = process.env.PORT || 8000

app.listen(port, function(){
    console.log(`Listening on port ${port}!`);
});
