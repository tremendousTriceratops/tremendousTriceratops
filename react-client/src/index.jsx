import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import sample_data from './components/sample_data.js';
import RecipeTile from './components/RecipeTile.jsx';
import Ingredients from './components/Ingredients.jsx';
import Information from './components/Information.jsx';
import SearchBar from './components/SearchBar.jsx';
import ingredientsList from './ingredientsList.js';
import Instructions from './components/Instructions.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      data:sample_data,
      listDataFromRecipe:[],
      listDataFromObj:null,

      isRecipeClicked:false,
      isRecipeUrl:''

    }

    this.recipeHandle = this.recipeHandle.bind(this);
    this.searchBarClicked = this.searchBarClicked.bind(this);
    this.filterSearch = this.filterSearch.bind(this);
  }

  recipeHandle(data,dataObj){
    console.log('clickedME')
    this.setState({
      listDataFromRecipe:data,
      listDataFromObj:dataObj,
      isRecipeUrl:dataObj.recipe.url,
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
     ingredient = <Ingredients className='Ingredients col-md-4 ' listData={this.state.listDataFromRecipe}  />
     // information = <Information listInfo={this.state.listDataFromObj}/>
   }

    return (
      <div className="container-fluid">
      <h1> Add Sweet title here </h1>
      <SearchBar ingredientsList = {ingredientsList} searchBarClicked = {this.searchBarClicked} filterSearch = {this.filterSearch}/>

      <RecipeTile data={this.state.data} recipeHandle={this.recipeHandle}/>
      {/* <Ingredients listData={this.state.listDataFromRecipe}  /> */}
        <div className="container bottom-half">
          <div className="row">
          {ingredient}
          {/* {information} */}
          <Information className='information' listInfo={this.state.listDataFromObj}/>
          <Instructions className="instructions" url={this.state.isRecipeUrl} />
         </div>
        </div>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
