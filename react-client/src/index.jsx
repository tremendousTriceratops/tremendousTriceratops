import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import sample_data from './components/sample_data.js';
import RecipeTile from './components/RecipeTile.jsx';
import Ingredients from './components/Ingredients.jsx';
import Information from './components/Information.jsx';
import Instructions from './components/Instructions.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      data:[],
      listDataFromRecipe:[],
      listDataFromObj:null,
      isRecipeClicked:false,
      isRecipeUrl:''


    }
    this.recipeHandle = this.recipeHandle.bind(this);
  }


  recipeHandle(data,dataObj,url){
    this.setState({
      listDataFromRecipe:data,
      listDataFromObj:dataObj,
      isRecipeUrl:url,
      isRecipeClicked:true
    });
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
      <div className='container-fluid'>

      <RecipeTile data={sample_data} recipeHandle={this.recipeHandle}/>
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
