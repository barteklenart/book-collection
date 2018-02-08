import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const BookListItem = ({ book, removeBook }) => {
	return (
		<div className="card">
			<div className="card-header">
				{book.title}
  			</div>
			<div className="card-body">
				<blockquote className="blockquote mb-0">
					<p>{book.description}</p>
					<footer className="blockquote-footer">{moment(book.completedAt).format('MM-DD-YYYY')}</footer>
				</blockquote>
			</div>
			<div>
				<Link to={`/edit/${book.id}`} className="btn btn-primary">Edit</Link>
				<button
					onClick={() => removeBook(book.id)}
					className="btn btn-danger">Remove</button>
			</div>
		</div>
	);
};

export default BookListItem;