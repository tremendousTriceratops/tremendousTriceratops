import React from 'react';



const CheckBox = (props) => (
	<div className="form-check">
	  <label className="form-check-label">
	    <input onClick = {() => props.boxClicked(props.i)} className="form-check-input" type="checkbox" value=""/>
	    {props.i}
	  </label>
	</div>
)

export default CheckBox;