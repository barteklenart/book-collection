import React from 'react';
import { shallow } from 'enzyme';

import { AddBook } from '../../components/AddBook';
import books from '../fixtures/book';

test('should render AddBook correctly', () => {
	const wrapper = shallow(<AddBook />);
	expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
	const addBook = jest.fn();
	const history = { 'push': jest.fn() };
	const wrapper = shallow(<AddBook addBook={addBook}  history={history}/>);
	wrapper.find('BookForm').prop('onSubmit')(books[1]);
	expect(addBook).toHaveBeenCalledWith(books[1]);
});