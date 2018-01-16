import React from 'react';

const AddBook = () => {
	return (
		<div>
			<h2>Add new book</h2>
			<form>	
				<label htmlFor="title">Title:</label>
				<input id="title" type="test" />
				<label htmlFor="content">Content</label>
				<textarea id="content" col="10" row="5"></textarea>
				<label>Completed</label>
			</form>
		</div>
	);
};

export default AddBook;