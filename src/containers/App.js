import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';

class App extends Component {
	state = {
		personState: [
			{ id: 'sdfsdf', name: 'Raj', age: 110 },
			{ id: 'dgdfgdfg', name: 'Gokul', age: 2000 },
			{ id: 'dfgdfgdfgdfg', name: 'Kamal', age: 3000 }
		],
		showPersons: false
	};

	personStateHandler = () => {
		console.log('I am Clocked');
		this.setState({
			personState: [
				{ name: 'Kid Flow', age: 110 },
				{ name: 'Gokul', age: 2000 },
				{ name: 'Kamal', age: 5000 }
			]
		});
	};

	deleteHandler = index => {
		const personsList = this.state.personState;
		personsList.splice(index, 1);
		this.setState({
			personState: personsList
		});
	};

	togglePersons = () => {
		const doesShowPersons = this.state.showPersons;
		this.setState({
			showPersons: !doesShowPersons
		});
	};

	changeValue = (event, id) => {
		const personIndex = this.state.personState.findIndex(person => {
			return person.id === id;
		});
		const person = { ...this.state.personState[personIndex] };
		person.name = event.target.value;

		const persons = [...this.state.personState];
		persons[personIndex] = person;

		this.setState({
			personState: persons
		});
	};

	render() {
		let persona = null;
		if (this.state.showPersons) {
			persona = (
				<div>
					<Persons
						persons={this.state.personState}
						clicked={this.deleteHandler}
						changed={this.changeValue}
					/>
				</div>
			);
		}

		return (
			<div className="App">
				<h1>Demo Application </h1>
				<button onClick={this.togglePersons}>My button</button>
				{persona}
			</div>
		);
	}
}

export default App;
