import React from 'react';

class Information extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      healthLabels:[],
      cautions:[],
      servings: null,
      calories:null,
      render:false
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      healthLabels: nextProps.listInfo.recipe.healthLabels,
      cautions:nextProps.listInfo.recipe.cautions,
      servings:nextProps.listInfo.recipe.yield,
      calories:nextProps.listInfo.recipe.calories,
    //  render:true // to take care of render lag
    })
  }
  render(){
    let check = this.healthLabels;
    // let calories = 'loading'
    // if(this.state.render){
    //   calories = this.state.calories
    // }

    {console.log(this.props.listInfo)}
    console.log(this.state.healthLabels);
    return(
      <div className="col-md-4  inf-div">
        {this.state.calories ?
        <div className="list-group info-container">
          <div className="d-flex w-100 justify-content-center">
            <h5 className="mb-1">Health Labels</h5>
          </div>
          {this.state.healthLabels.map((item,i)=>{
            return <p className="mb-1 inf-li" key={i}>{item}</p>
          })}
          <div className="d-flex w-100 justify-content-center">

            <h5 className="mb-1">Cautions</h5>
          </div>
          {this.state.cautions.map((item,i)=>{
            return <p className="inf-li" key={i}>{item}</p>
          })}
          <div className="d-flex w-100 justify-content-center">
            <h5 className="mb-1">Servings</h5>
          </div>
          <p className="inf-li">{this.state.servings}</p>
          <div className="d-flex w-100 justify-content-center">
            <h5 className="mb-1">calories</h5>
          </div>
          <p className="inf-li">{this.state.calories ? this.state.calories : 'loading'} </p>


        </div>
       : null}
      </div>
    )
  }



}
{/* <div>
  <ul className="list">Health Labels
  {this.state.healthLabels.map((item,i)=>{
    return <li className="inf-li" key={i}>{item}</li>
  })}
  </ul>
  <ul className="list">Cautions
  {this.state.cautions.map((item,i)=>{
    return <li className="inf-li" key={i}>{item}</li>
  })}
  </ul>
  <ul className="list">Servings
  <li className="inf-li">{this.state.servings}</li>
  </ul>
  <ul className="list">calories
  <li className="inf-li">{this.state.calories ? this.state.calories : 'loading'} </li>
  </ul>

</div> */}









// cautions and healtLabels
// [10:37]
// yield
// [10:38]
// calories
// [10:38]
// yield = servings
// Health Labels{props.listInfo.healtLabels((item,i)=>{
//   return <li key={i}>item</li>

export default Information;
