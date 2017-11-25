import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import sample_data from './components/sample_data.js';
import RecipeTile from './components/RecipeTile.jsx';
import Ingredients from './components/Ingredients.jsx';
import Information from './components/Information.jsx';
import SearchBar from './components/SearchBar.jsx';
import ingredientsList from './ingredientsList.js';

var sample_data2 = [{"recipe":
  {"uri":"http://www.edamam.com/ontologies/edamam.owl#recipe_d7dc07bd6b3dade1b846478334b9195f",
  "label":"Infused Honey","image":"https://www.edamam.com/web-img/69e/69e0df7cfa82cc2a10113c1c36cb2d0d.jpg",
  "source":"Martha Stewart",
  "url":"http://www.marthastewart.com/336210/infused-honey",
  "shareAs":"http://www.edamam.com/recipe/infused-honey-d7dc07bd6b3dade1b846478334b9195f/honey",
  "yield":4,"dietLabels":["Low-Fat"],"healthLabels":["Vegetarian","Peanut-Free","Tree-Nut-Free",
  "Alcohol-Free"],"cautions":[],"ingredientLines":["1 cup honey","4 star anise","4 cinnamon sticks"],
  "ingredients":[{"text":"1 cup honey","weight":339},{"text":"4 star anise","weight":8},{"text":"4 cinnamon sticks",
  "weight":10.399999618530273}],"calories":1083.2079990577697,"totalWeight":357.3999996185303,
  "bookmarked":false,"bought":false}},

{"recipe":
{"uri":"http://www.edamam.com/ontologies/edamam.owl#recipe_d7dc07bd6b3dade1b846478334b9195f",
"label":"Infused Honey","image":"https://www.edamam.com/web-img/69e/69e0df7cfa82cc2a10113c1c36cb2d0d.jpg",
"source":"Martha Stewart",
"url":"http://www.marthastewart.com/336210/infused-honey",
"shareAs":"http://www.edamam.com/recipe/infused-honey-d7dc07bd6b3dade1b846478334b9195f/honey",
"yield":4,"dietLabels":["Low-Fat"],"healthLabels":["Vegetarian","Peanut-Free","Tree-Nut-Free",
"Alcohol-Free"],"cautions":[],"ingredientLines":["1 cup honey","4 star anise","4 cinnamon sticks"],
"ingredients":[{"text":"1 cup honey","weight":339},{"text":"4 star anise","weight":8},{"text":"4 cinnamon sticks",
"weight":10.399999618530273}],"calories":1083.2079990577697,"totalWeight":357.3999996185303,
"bookmarked":false,"bought":false}},

{"recipe":
{"uri":"http://www.edamam.com/ontologies/edamam.owl#recipe_d7dc07bd6b3dade1b846478334b9195f",
"label":"Infused Honey","image":"https://www.edamam.com/web-img/69e/69e0df7cfa82cc2a10113c1c36cb2d0d.jpg",
"source":"Martha Stewart",
"url":"http://www.marthastewart.com/336210/infused-honey",
"shareAs":"http://www.edamam.com/recipe/infused-honey-d7dc07bd6b3dade1b846478334b9195f/honey",
"yield":4,"dietLabels":["Low-Fat"],"healthLabels":["Vegetarian","Peanut-Free","Tree-Nut-Free",
"Alcohol-Free"],"cautions":[],"ingredientLines":["1 cup honey","4 star anise","4 cinnamon sticks"],
"ingredients":[{"text":"1 cup honey","weight":339},{"text":"4 star anise","weight":8},{"text":"4 cinnamon sticks",
"weight":10.399999618530273}],"calories":1083.2079990577697,"totalWeight":357.3999996185303,
"bookmarked":false,"bought":false}},

{"recipe":
{"uri":"http://www.edamam.com/ontologies/edamam.owl#recipe_d7dc07bd6b3dade1b846478334b9195f",
"label":"Infused Honey","image":"https://www.edamam.com/web-img/69e/69e0df7cfa82cc2a10113c1c36cb2d0d.jpg",
"source":"Martha Stewart",
"url":"http://www.marthastewart.com/336210/infused-honey",
"shareAs":"http://www.edamam.com/recipe/infused-honey-d7dc07bd6b3dade1b846478334b9195f/honey",
"yield":4,"dietLabels":["Low-Fat"],"healthLabels":["Vegetarian","Peanut-Free","Tree-Nut-Free",
"Alcohol-Free"],"cautions":[],"ingredientLines":["1 cup honey","4 star anise","4 cinnamon sticks"],
"ingredients":[{"text":"1 cup honey","weight":339},{"text":"4 star anise","weight":8},{"text":"4 cinnamon sticks",
"weight":10.399999618530273}],"calories":1083.2079990577697,"totalWeight":357.3999996185303,
"bookmarked":false,"bought":false}},

{"recipe":
{"uri":"http://www.edamam.com/ontologies/edamam.owl#recipe_d7dc07bd6b3dade1b846478334b9195f",
"label":"Infused Honey","image":"https://www.edamam.com/web-img/69e/69e0df7cfa82cc2a10113c1c36cb2d0d.jpg",
"source":"Martha Stewart",
"url":"http://www.marthastewart.com/336210/infused-honey",
"shareAs":"http://www.edamam.com/recipe/infused-honey-d7dc07bd6b3dade1b846478334b9195f/honey",
"yield":4,"dietLabels":["Low-Fat"],"healthLabels":["Vegetarian","Peanut-Free","Tree-Nut-Free",
"Alcohol-Free"],"cautions":[],"ingredientLines":["1 cup honey","4 star anise","4 cinnamon sticks"],
"ingredients":[{"text":"1 cup honey","weight":339},{"text":"4 star anise","weight":8},{"text":"4 cinnamon sticks",
"weight":10.399999618530273}],"calories":1083.2079990577697,"totalWeight":357.3999996185303,
"bookmarked":false,"bought":false}},

{"recipe":
{"uri":"http://www.edamam.com/ontologies/edamam.owl#recipe_d7dc07bd6b3dade1b846478334b9195f",
"label":"Infused Honey","image":"https://www.edamam.com/web-img/69e/69e0df7cfa82cc2a10113c1c36cb2d0d.jpg",
"source":"Martha Stewart",
"url":"http://www.marthastewart.com/336210/infused-honey",
"shareAs":"http://www.edamam.com/recipe/infused-honey-d7dc07bd6b3dade1b846478334b9195f/honey",
"yield":4,"dietLabels":["Low-Fat"],"healthLabels":["Vegetarian","Peanut-Free","Tree-Nut-Free",
"Alcohol-Free"],"cautions":[],"ingredientLines":["1 cup honey","4 star anise","4 cinnamon sticks"],
"ingredients":[{"text":"1 cup honey","weight":339},{"text":"4 star anise","weight":8},{"text":"4 cinnamon sticks",
"weight":10.399999618530273}],"calories":1083.2079990577697,"totalWeight":357.3999996185303,
"bookmarked":false,"bought":false}}]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      data:sample_data2,
      listDataFromRecipe:[],
      listDataFromObj:null,
      isRecipeClicked:false
    }

    this.recipeHandle = this.recipeHandle.bind(this);
    this.searchBarClicked = this.searchBarClicked.bind(this);
    this.filterSearch = this.filterSearch.bind(this);
  }

  recipeHandle(data,dataObj){
    this.setState({
      listDataFromRecipe:data,
      listDataFromObj:dataObj,
      isRecipeClicked:true
    });
  }

  //search the database using keyword
  searchBarClicked(keyword) {
    const search = {search: keyword}
    $.ajax({
      url: '/search', 
      method: 'POST',
      data: JSON.stringify(search),
      contentType: 'application/json',
      success : (data) => {
        console.log('success', data)
      }, 
      error: (data) => {
        console.log('err', data)
      }
    })
  }
  //filtered search to api using check boxes 
  filterSearch(array) {
    console.log('filter search');
    const arrayOfIngredients = {ingredients: array};
    $.ajax({
      url: '/search/filter', 
      method: 'POST',
      data: JSON.stringify(arrayOfIngredients),
      contentType: 'application/json',
      success : (data) => {
        console.log('filter search success', data)
        this.setState({data:data.hits})
      }, 
      error: (data) => {
        console.log('err', data)
      }
    })
  }

  render () {
   const isRecipeClicked = this.state.isRecipeClicked;
   let ingredient = null;
   let information = null;
   if(isRecipeClicked){
     ingredient = <Ingredients className='Ingredients' listData={this.state.listDataFromRecipe}  />
     // information = <Information listInfo={this.state.listDataFromObj}/>
   }

    return (
      <div className="container-fluid">
      <SearchBar ingredientsList = {ingredientsList} searchBarClicked = {this.searchBarClicked} filterSearch = {this.filterSearch}/>

      <RecipeTile data={this.state.data} recipeHandle={this.recipeHandle}/>
      {/* <Ingredients listData={this.state.listDataFromRecipe}  /> */}
        <div>
          {ingredient}
          {/* {information} */}
          <Information className='information' listInfo={this.state.listDataFromObj}/>
        </div>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
