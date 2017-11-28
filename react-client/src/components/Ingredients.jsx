import React from 'react';


const Ingredients = (props) =>(
  <div className=".col-md-4 ing-div">

    <ul className=" list-group ing-title">
      <h5> Ingredients</h5>
      {props.listData.map((ingredient,i)=>{

        return <li className=" list-group-item ing" key={i}>{ingredient}</li>
      })}

    </ul>
  </div>



)
export default Ingredients;
