'use strict';

const express = require('express');
const router = express.Router();

// Our first route - localhost:3000/
router.get('/', (req, res) => {
  console.log(req.requestTime);
  res.send('Got a GET request');
});

router.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));

router.get('/about', (req, res) => res.sendFile(__dirname + '/views/about.html'));

router.get('/about', (req, res) => res.sendFile(__dirname + '/views/gallery.html'));

module.exports = router;