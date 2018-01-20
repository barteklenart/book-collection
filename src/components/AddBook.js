import React from 'react';
import { connect } from 'react-redux';
import { addBook } from '../actions/books';

import BookForm from './BookForm';

const AddBook = (props) => {
	const onSubmit = (book) => {
		props.addBook(book);
	}
	return (
		<div>
			<h2>Add new book</h2>
			<BookForm onSubmit={onSubmit}/>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		addBook: (book) => dispatch(addBook(book))
	};
};

export default connect(undefined, mapDispatchToProps)(AddBook);