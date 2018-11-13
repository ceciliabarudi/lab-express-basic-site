'use strict';
//require express
const express = require('express');

//require routes
const mainRoutes = require('./routes/main');

//start express app
const app = express()

//define port
const port = 3000

//serve static files from public folder
app.use(express.static('public'));

//use mainroutes
app.use('/', mainRoutes);

//return 404 if requested file not found
app.get('*', (req, res) => res.send('404 - Page not found'))

//listen for requests
app.listen(port, () => console.log(`listening on port ${port}!`))