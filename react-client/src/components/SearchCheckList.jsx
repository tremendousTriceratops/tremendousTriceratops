import React from 'react';
import ReactDOM from 'react-dom';
import CheckBox from './CheckBox.jsx';

const leftOvers1 = ['rice', 'rolled oats'];
const leftOvers2 = ['cinnamon', 'cloves', 'ginger','nutmeg']

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: []

		};
		this.boxClicked = this.boxClicked.bind(this);

	}

	boxClicked(info) {
		var oldArray = this.state.checked;
		oldArray.push(info);
		this.setState({checked: oldArray});
	}

	render() {

	return (
		<div className="container">
		{console.log(this.props.filterSearch)}
		  <div className="row">
		    <div className="col-sm-2">
		    	<span className="badge badge-primary">Baking Products</span>
			    {this.props.ingredientsList.bakingProducts.map((el, index) => <CheckBox i = {el} key = {index} boxClicked = {this.boxClicked}/>)}
			   	<span className="badge badge-primary">Canned Beans</span>
			    {this.props.ingredientsList.cannedBeans.map((el, index) => <CheckBox i = {el} key = {index} boxClicked = {this.boxClicked}/>)}
        </div>
        <div className="col-sm-2">
        	<span className="badge badge-primary">Canned Goods</span>
        	{this.props.ingredientsList.cannedGoods.map((el, index) => <CheckBox i = {el} key = {index} boxClicked = {this.boxClicked}/>)}
        </div>
        <div className="col-sm-2">
        	<span className="badge badge-primary">Condiments</span>
        	{this.props.ingredientsList.condiments.map((el, index) => <CheckBox i = {el} key = {index} boxClicked = {this.boxClicked}/>)}
        	<span className="badge badge-primary">Grains</span>
        	{this.props.ingredientsList.grains.map((el, index) => <CheckBox i = {el} key = {index} boxClicked = {this.boxClicked}/>)}
        </div>
        <div className="col-sm-2">
        	{leftOvers1.map((el, index) => <CheckBox i = {el} key = {index} boxClicked = {this.boxClicked}/>)}
          <span className="badge badge-primary">Oils</span>
        	{this.props.ingredientsList.oils.map((el, index) => <CheckBox i = {el} key = {index} boxClicked = {this.boxClicked}/>)}
        	<span className="badge badge-primary">Refrigerator</span>
        	{this.props.ingredientsList.refrigerator.map((el, index) => <CheckBox i = {el} key = {index} boxClicked = {this.boxClicked}/>)}
        </div>
        <div className="col-sm-2">
          <span className="badge badge-primary">Seasonings/Spices</span>
        	{this.props.ingredientsList.seasonings.map((el, index) => <CheckBox i = {el} key = {index} boxClicked = {this.boxClicked}/>)}
        </div>
        <div className="col-sm-2">
        {leftOvers2.map((el, index) => <CheckBox i = {el} key = {index} boxClicked = {this.boxClicked}/>)}
        	{this.props.ingredientsList.spiceBlends.map((el, index) => <CheckBox i = {el} key = {index} boxClicked = {this.boxClicked}/>)}
        	<span className="badge badge-primary">Vinegars</span>
        	{this.props.ingredientsList.vinegars.map((el, index) => <CheckBox i = {el} key = {index} boxClicked = {this.boxClicked}/>)}
        </div>
      <button onClick = {()=> this.props.filterSearch(this.state.checked)} type="button" className="btn btn-primary btn-lg btn-block">Click to search: {this.state.checked.join(', ')} </button>
		  </div>
		</div>
	)
}

}

export default SearchBar;

//'pasta', 'rice', 'rolled oats'
