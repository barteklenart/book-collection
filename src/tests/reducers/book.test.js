import bookReducer from '../../reducers/books';
import books from '../fixtures/book';

test('should remove book by id', () => {
	const action = {
		type: 'REMOVE_BOOK',
		id: books[0].id
	};

	const reducer = bookReducer(books, action);
	expect(reducer).toEqual([books[1], books[2]]);
});

test('should add an book', () => {
	const action = {
		type: 'ADD_BOOK',
		book: {
			id: 1234,
			title: 'New added book',
			description: 'New book description'
		}
	};

	const reducer = bookReducer(books, action);
	expect(reducer).toEqual([...books, action.book]);
});

test('should edit an book', () => {
	const action = {
		type: 'EDIT_BOOK',
		id: 123456,
		update: {
			title: 'Title after update'
		}
	};

	const reducer = bookReducer(books, action);
	expect(reducer).toEqual([ 
		books[0], 
		books[1],
		{
			id: 123456,
			title: 'Title after update',
			description: "asdf", 
			completedAt: 1516878000000 
		}
	]);
});