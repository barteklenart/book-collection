import React from 'react';
import { Link } from 'react-router-dom';

const BookListItem = ({ book }) => {
	return (
		<div>
			<h3>{book.title}</h3>
			<p>{book.description}</p>
			<span>{book.completedAt}</span>
			<Link to={`/edit/${book.id}`}>Edit</Link>
			<hr />
		</div>
	);
};

export default BookListItem;