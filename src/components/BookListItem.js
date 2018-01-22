import React from 'react';

const BookListItem = ({book}) => {
	return (
		<div>
			<h3>{book.title}</h3>
			<p>{book.description}</p>
			<span>{book.completedAt}</span>
			<hr />
		</div>
	);
}

export default BookListItem;