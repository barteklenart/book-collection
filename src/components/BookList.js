import React from 'react';
import { connect } from 'react-redux';

import BookListItem from './BookListItem';
import { removeBook } from '../actions/books';
import selectBook from '../selectors/book';

const BookList = (props) => {
	const removeBook = (id) => {
		props.removeBook(id);
	};

	return (
		<div>
			{props.books.length === 0 ? <p>No books</p> : props.books.map((book) => { return <BookListItem key={book.id} book={book} removeBook={removeBook} /> })}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		books: selectBook(state.books, state.filters)
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeBook: (id) => dispatch(removeBook(id))	
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);