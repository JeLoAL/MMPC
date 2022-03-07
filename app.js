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
app.use(express.static('public'));

//Templating Engine
app.engine('hbs', exphbs.engine( {
    extname: '.hbs',
    layDir: __dirname + '/../views/try/'
}));
app.set('view engine', 'hbs');

// // Connection Pool
// const pool = mysql.createPool({
//     connectionLimit : 100,
//     host            :process.env.DB_HOST,
//     user            :process.env.DB_USER,
//     password        :process.env.DB_PASSWORD,
//     database        :process.env.DB_NAME
// });

// //DB Connection
// pool.getConnection((err, connection) => {
//     if(err) throw err; //not connected
//     console.log('Connection as ID ' + connection.threadId);
// });

// Routes
const routes = require('./server/routes/user');
app.use('/', routes);

const adminRoutes = require('./server/routes/admin');
app.use('/', adminRoutes);



app.listen(port, () => console.log(`Server running on port ${port}`));
