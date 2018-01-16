export const  addBook = (id = 1, title = '', description = '', completedAt = 0) => {
	return {
		type: 'ADD_BOOK',
		book: {
			id,
			title,
			description,
			completedAt
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