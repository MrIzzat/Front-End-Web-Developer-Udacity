// The express package has already been installed in the terminal

// The requirements in `instructions.md`
const express = require('express');

const app = express();

const cors = require('cors');
app.use(cors());

//  Empty JavaScript object to act as an endpoint for all routes
projectData = {};

// Dependencies
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded( { extended:false }));
app.use (bodyParser.json());

//intializing the main project folder
app.use(express.static('website'));