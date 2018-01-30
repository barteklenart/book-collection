import React from 'react';
import { shallow } from 'enzyme';

import BookListItem from '../../components/BookListItem';
import books from '../fixtures/book';

test('should render BookListItem correctly', () => {
	const wrapper = shallow(<BookListItem book={books[0]} />);
	expect(wrapper).toMatchSnapshot();
});

test('should handle removeBook', () => {
	const removeBook = jest.fn();
	const wrapper = shallow(<BookListItem book={books[0]} removeBook={removeBook}/>)
	expect(wrapper).toMatchSnapshot();
	wrapper.find('button').simulate('click');
	expect(removeBook).toHaveBeenCalledWith(books[0].id);
});