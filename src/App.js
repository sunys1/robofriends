import React, {Component}  from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';
import './App.css';

//App as a component that owns the 2 states, can pass down the states / custom functions as prop to render (). 
class App extends Component {
	constructor () {
		super();
		this.state = {
			robots: robots,
			searchfield: ''	
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	} //on search box change we update the state

	render () {
		//filter the robots based on search box change
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
			<div className = 'tc'>	
				<h1 className = 'f1'>Robots Friends </h1>
				<SearchBox searchChange = {this.onSearchChange} />
				<CardList robots = {filteredRobots} />
			</div>
		)	
	}
}

export default App;