import { addBook, editBook, removeBook } from '../../actions/books';

test('should setup remove book acition object', () => {
	const id = 1234;
	const action = removeBook(id);
	expect(action).toEqual({
		type: 'REMOVE_BOOK',
		id
	});
});

test('should setup edit book action object', () => {
	const id = 123;
	const update = {
		title: 'New title', 
		description: 'New description',
		completedAt: 123123123
	};
	const action = editBook(id, update);

	expect(action).toEqual({
		type: 'EDIT_BOOK',
		id,
		update
	});
});

test('should setup add book action object with provided values', () => {
	const book = {
		title: 'Book name',
		description: 'Book description',
		completedAt: 123123123
	};

	const action = addBook(book);

	expect(action).toEqual({
		type: 'ADD_BOOK',
		book: {
			id: expect.any(String),
			...book
		}
	});
});
