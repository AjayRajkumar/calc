import React from 'react';
import Person from './Person/Person';

const persons = props =>
	props.persons.map((person, index) => {
		return (
			<Person
				name={person.name}
				age={person.age}
				key={person.id}
				clickk={() => props.clicked(index)}
				// clickk={() => this.deleteHandler(index)}
				changee={event => props.changeValue(event, person.id)}
			/>
		);
	});
export default persons;
