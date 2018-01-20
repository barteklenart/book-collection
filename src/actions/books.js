import uuid from 'uuid';

export const  addBook = (book) => {
	const id = uuid();
	return {
		type: 'ADD_BOOK',
		book: {
			id,
			...book
		}
	};
};

export const removeBook = (id) => {
	return {
		type: 'REMOVE_BOOK',
		id
	};
};

export const editBook = (id, update) => {
	return {
		type: 'EDIT_BOOK',
		id,
		update
	};
};