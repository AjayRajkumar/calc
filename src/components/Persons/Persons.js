import React from 'react';
import Person from './Person/Person';

const persons = props =>
	props.persons.map((person, indexx) => {
		return (
			<Person
				name={person.name}
				age={person.age}
				key={person.id}
				clickk={() => props.clicked(indexx)}
				// clickk={() => this.deleteHandler(index)}
				changee={event => props.changeValue(event, person.id)}
			/>
		);
	});
export default persons;
