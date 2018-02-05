import database from '../firebase/firebase';

export const  addBook = (book) => {
	return (dispatch) => {
		return database.ref('books').push(book).then((ref) => {
			dispatch({
				type: 'ADD_BOOK',
				book: {
					id: ref.key,
					...book
				}
			});
		});
	};
};

export const removeBook = (id) => {
	return (dispatch) => {
		return database.ref(`books/${id}`).remove().then(() => {
			return dispatch({
				type: 'REMOVE_BOOK',
				id
			});
		});
	};
};

export const editBook = (id, update) => {
	return (dispatch) => {
		return database.ref(`books/${id}`).update(update).then(() => {
			return dispatch({
				type: 'EDIT_BOOK',
				id,
				update
			});
		});
	};
};

export const setBooks = () => {
	return (dispatch) => {
		database.ref('books').once('value').then((snapshot) => {
			const books = [];

			snapshot.forEach((childSnapshot) => {
				books.push({
					id: childSnapshot.key,
					...childSnapshot.val()
				});
			});

			return dispatch({
				type: 'SET_BOOKS',
				books
			});				
		});
	};
};