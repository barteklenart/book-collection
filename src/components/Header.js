import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="/">Book collection</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink to="/" activeClassName="current">Dashboard</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/add" activeClassName="current">Add Book</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;