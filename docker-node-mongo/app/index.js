'use strict';

const mongoose = require('mongoose');
const express = require('express');
const employees = require('./model');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const db = 'mongodb://mongodb:27017/helpdesk';

mongoose.Promise = global.Promise;

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, connectTimeoutMS: 10000, socketTimeoutMS: 45000}, function(err)  {
    if (err)
    {
        console.log(err, true);
    }

});

var data = [
	{
	  name: "Johns",
	  age: 21,
	  location: "Nesw York"
	},
	{
	  name: "Smisth",
	  age: 27,
	  location: "Texsas"
	},
	{
	  name: "Lsisa",
	  age: 23,
	  location: "Chicsago"
	}
  ];

// App
const app = express();
app.get('/', (req, res) => {
  employees.insertMany(data, function(err, result) {
	if (err) {
		console.log(err);
	} else {
		console.log(result);
	}
  });
  res.send('Hello World');
});


app.listen(PORT, HOST);
console.log(`Running on this port http://${HOST}:${PORT}`);
