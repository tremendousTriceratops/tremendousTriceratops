import React from 'react';


const Instructions = (props) =>(
  <div className=".col-md-6 .offset-md-3
 ins-div">
    <div className='instructions '>
    {console.log('@@@@@@@@@@', props)}
      If you would like to Make this recipe
      please <a href={props.url}> click here </a>

    </div>
  </div>



)
export default Instructions;
