import React from 'react';
import './Person.css';
const person = props => {
	return (
		<div className="personStyle" onClick={props.clickk}>
			<p>
				I am person {props.name} my age is {props.age}
			</p>
			<input type="text" onChange={props.changee} />
			<p>{props.children}</p>
		</div>
	);
};

export default person;
