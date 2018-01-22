import React from 'react';
import { connect } from 'react-redux';

import BookListItem from './BookListItem'

const BookList = (props) => {
	return (
		<div>
			{props.books.length === 0 ? <p>No books</p> : props.books.map((book, key) => { return <BookListItem key={key} book={book} /> })}
		</div>
	);
}

const mapStateToProps = ({ books }) => {
	return {
		books
	};
};

export default connect(mapStateToProps)(BookList);