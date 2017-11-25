import React from 'react';


class RecipeTile extends React.Component {
  constructor(props){
    super(props)
  }
  // recipeHandle(data,key){
  //   this.props.recipeHandle(key);
  // }


  render(){
    return(

      <div className="container">
      {console.log('=========', this.props.data)}
        <div className="row tileContainer" >

        {this.props.data.map((item,i)=>{
             //console.log(item.recipe); item.recipe.ingredientLines ..

            return(
              <div className="col-xs-2" key={i}>
               <img onClick={this.props.recipeHandle.bind(this,item.recipe.ingredientLines,item,item.recipe.url)} src={item.recipe.image} className="foodTile" />
                 <div className="foodTitleName">{item.recipe.label}</div>
              </div>

          )

        })}
       </div>
      </div>
    )
  }
}


export default RecipeTile;
