'use strict';
//require express
const express = require('express');

//start express app
const app = express()

//define port
const port = 3000;

//serve static files from public folder
app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));
app.get('/about', (req, res) => res.sendFile(__dirname + '/views/about.html'));
app.get('/gallery', (req, res) => res.sendFile(__dirname + '/views/gallery.html'));

//return 404 if requested file not found
app.get('*', (req, res) => res.send('404 - Page not found'))

//listen for requests
app.listen(port, () => console.log(`listening on port ${port}!`))