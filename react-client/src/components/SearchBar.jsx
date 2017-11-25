import React from 'react';
import ReactDOM from 'react-dom';
import SearchCheckList from './SearchCheckList.jsx';


class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  text : '',
		  filterBox: false
		};
		this.filterSearchClicked = this.filterSearchClicked.bind(this);

	}

	filterSearchClicked(checked) {
	  this.props.filterSearch(checked);
	  this.setState({filterBox: !this.state.filterBox})
	}

	render() {
		return (
			<div className="container SearchBar">
			  <div className="row">
			    <div className="col-2">
						<button onClick = {()=> this.setState({filterBox: !this.state.filterBox})} type="button" className="btn btn-primary">Filtered Search</button>
			    </div>
    			<div className="col-6">
						
    			<div className="input-group input-group-lg">
  				<input onChange = {(e)=> this.setState({text: e.target.value})} type="text" className="form-control" placeholder="Search by keyword" aria-describedby="sizing-addon1"/>
					<button onClick = {() => this.props.searchBarClicked(this.state.text)} type="button" className="btn btn-primary">Search</button>
					</div>
    			</div>
    			<div className="col-2">
      		  <img />
      		  User Pic

    			</div>
    			<div className="col-2">
			      <div className="btn-group">
						  <button type="button" className="btn btn-secondary">Feed</button>
						  <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    <span className="sr-only">Toggle Dropdown</span>
						  </button>
						  <div className="dropdown-menu">
						    <a className="dropdown-item" href="#!">Main Feed</a>
						    <a className="dropdown-item" href="#!">My Favorites</a>
						  </div>
						</div>
    			</div>
  			</div>


  			{this.state.filterBox ? <SearchCheckList ingredientsList = {this.props.ingredientsList} filterSearchClicked = {this.filterSearchClicked}/> : <div></div>}
			</div>

		)
	}

}

export default SearchBar;

//https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg