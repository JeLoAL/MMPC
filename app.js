const express = require('express');
const exphbs = require('express-handlebars/dist');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const Connection = require('mysql/lib/Connection');

require("dotenv").config();


const app = express();
const port = process.env.PORT || 1337;

// Parsing middleware
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

//Parse application/json
app.use(bodyParser.json());

// Static Files
app.use(express.static('./public'));

//Templating Engine
app.engine('hbs', exphbs.engine( {
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

// Routes
const routes = require('./server/routes/user');
app.use('/', routes);

const adminRoutes = require('./server/routes/admin');
app.use('/', adminRoutes);



app.listen(port, () => console.log(`Server running on port ${port}`));
