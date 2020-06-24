import React, {Component}  from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

//App as a component that owns the 2 states, can pass down the states / custom functions as prop to render (). 
class App extends Component {
	constructor () {
		super();
		this.state = {
			robots: [],
			searchfield: ''	
		}
	}

	componentDidMount() {
		fetch ('https://jsonplaceholder.typicode.com/users')
		  .then(response => response.json())
		  .then(users => this.setState({robots: users}));
	}
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	} //on search box change we update the state

	render () {
		const {robots, searchfield} = this.state;
		//filter the robots based on search box change
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		return !robots.length ?
			<h1>Loading</h1> : 
			(
				<div className = 'tc'>	
					<h1 className = 'f1'>Robots Friends </h1>
					<SearchBox searchChange = {this.onSearchChange} />
					<Scroll>
						<CardList robots = {filteredRobots} />
					</Scroll>	
				</div>
			)
	}
}

export default App;