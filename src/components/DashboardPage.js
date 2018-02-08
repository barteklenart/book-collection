import React from 'react';
import Header from './Header';

import BookList from './BookList';
import BookListFilters from './BookListFilters';

const DashboardPage = () => {
	return (
		<div className="container">
			<BookListFilters />
			<BookList />
		</div>
	);
};

export default DashboardPage;