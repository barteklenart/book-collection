import React from 'react';
import { connect } from 'react-redux';

import BookListItem from './BookListItem';
import { removeBook } from '../actions/books';

const BookList = (props) => {
	const removeBook = (id) => {
		props.removeBook(id);
	};

	return (
		<div>
			{props.books.length === 0 ? <p>No books</p> : props.books.map((book, key) => { return <BookListItem key={key} book={book} removeBook={removeBook} /> })}
		</div>
	);
}

const mapStateToProps = ({ books }) => {
	return {
		books
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeBook: (id) => dispatch(removeBook(id))	
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);