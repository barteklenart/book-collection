import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const BookListItem = ({ book }) => {
	return (
		<div>
			<h3>{book.title}</h3>
			<p>{book.description}</p>
			<span>{moment(book.completedAt).format('MM-DD-YYYY')}</span>
			<Link to={`/edit/${book.id}`}>Edit</Link>
			<hr />
		</div>
	);
};

export default BookListItem;