import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import sample_data from './components/sample_data.js';
import RecipeTile from './components/RecipeTile.jsx';
import Ingredients from './components/Ingredients.jsx';
import Information from './components/Information.jsx';
import SearchBar from './components/SearchBar.jsx';
import ingredientsList from './ingredientsList.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      data:[],
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

  //search the database 
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
        // this.setState({data:data})
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

      <RecipeTile data={sample_data} recipeHandle={this.recipeHandle}/>
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
