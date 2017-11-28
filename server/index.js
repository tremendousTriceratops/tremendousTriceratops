var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var apiHelper = require('./apiHelper.js');
//const pg = require('pg');
const db = require('../database-postgresql/index');


// Connect to DATABASE
db.connect();

//*********************************************************************************************************
//DATABASE HELPER FUNCTIONS NEEDED:
// searchTerm(string, callback) - Gets all recipies from db that include string in its name then uses cb to return them.
// addToDb(obj, callback) - Adds obj to db then invokes cb.
// getAll(callback) - Gets all recipes from database and uses cb to return them
// getUserFavorites(userId, callback) - Users userId to find users saved recipes then returns them using cb.
//*********************************************************************************************************
 app = express();

//*********************************************************************************************************
//---MIDDLEWARE---
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json())
//*********************************************************************************************************

app.post('/search/filter', (req, res) => {
	//search the api with an array of ingredients
	apiHelper.apiSearch(req.body.ingredients, (data) => {
		console.log('--------------', req.body.ingredients)
		var data = JSON.parse(data);
		//*******************
		// db.addTodDb(data, (data) => {res.status(201); res.send(data)})
		//*******************
		res.status(201);
		res.send(data);
	})
})

app.post('/search', (req, res) => {
// 	/search - Query DB for recipes by search term
  // db.searchTerm(req.body.search, (data) => {
  // 	res.status(201);
  // 	res.send(data);
  // })
  res.status(201)
  res.send(req.body.search)
})

app.get('/grid', (req,res) => {
// 	/grid - Query DB for all recipes (12?)
	db.getAll(data => {
		res.status(200);
		res.send(data);
	})
})

app.get('/favorites', (req,res) => {
// 	/favorites - Query DB for user’s favorites
	//either use url to find specific user, or send user info in header, or convert to
	//post and send user name in body
	db.getUserFavorites(userId, (data)=> {
		res.status(200);
		res.send(data)
	})
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
