import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<h1>Book collection</h1>			
			<NavLink to="/" activeClassName="current">Dashboard</NavLink>
			<NavLink to="/edit" activeClassName="current">Edit Book</NavLink>
			<NavLink to="/add" activeClassName="current">Add Book</NavLink>
		</header>
	);
};

export default Header;