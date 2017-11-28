const request = require('request');

//***************************************************
// We need to create a seperate file to save key and id before we deploy 
const appId = 'd6c2df4e'
const appKey = '06a6e4be0f23cd75db3af16ae7d7b696' 
//***************************************************
const apiSearch = (arrayOfIngredients, callback) => {
	//array of ingredients turned into a string seperated by a comma 
	const search = arrayOfIngredients.join(',');
	//GET request to url with search info directly embeded in url 
	const url = `https://api.edamam.com/search?q=${search}&app_id=${appId}&app_key=${appKey}&from=0&to=12`
	request(url, (err, response, body) => {
		if(err) {
			console.log('err', arrayOfIngredients)
			callback(body)
		} else {
			callback(body)
		}
	});
}

module.exports = {
	apiSearch : apiSearch
}