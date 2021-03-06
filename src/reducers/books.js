export default (state = [], action) => {
	switch (action.type) {
		case 'ADD_BOOK': {
			return [
				...state,
				action.book
			];
		}
		case 'REMOVE_BOOK': {
			return state.filter(({ id }) => id !== action.id);
		}
		case 'EDIT_BOOK': {
			return state.map((book) => {
				if (book.id === action.id) {
					return {
						...book,
						...action.update
					};
				} else {
					return book;
				}
			});
		}
		case 'SET_BOOKS' : {
			return action.books;
		}
		default:
			return state;
	}
};