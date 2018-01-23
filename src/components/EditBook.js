import React from 'react';
import { connect } from 'react-redux';
import { editBook } from '../actions/books';

import BookForm from './BookForm';


class EditBook extends React.Component {
	onSubmit = (book) => {
		this.props.editBook(this.props.book.id, book)
		this.props.history.push('/');
	}

	render(){
		return (
			<div>
				<BookForm onSubmit={this.onSubmit} book={this.props.book}/>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		book: state.books.find((el) => el.id === props.match.params.id)
	};
};

const mapDispatchToProps = (dispatch, props) => ({
	editBook: (id, book) => dispatch(editBook(id, book))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditBook);