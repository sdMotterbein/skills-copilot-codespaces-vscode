// Create web server
// Comments web service
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

// Comments object
let comments = [];

// Generate a random ID
const generateId = () => {
  return Math.floor(Math.random()