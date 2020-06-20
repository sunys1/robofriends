import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<div className = 'pa2'>
			<input
				className = 'pa3 ba b--green bg-lightest-blue' 
				type='search' 
				placeholder = 'Search by name' 
				//onChange listener listens to the searchBox change and runs the prop 'searChange'
				//then it communicates to the parent App to filter robots list
				onChange = {searchChange}/>
		</div>
	);
}

export default SearchBox;