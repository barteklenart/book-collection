import React from 'react';
import { shallow } from 'enzyme';

import BookForm from '../../components/BookForm';
import books from '../fixtures/book';

let wrapper;

beforeEach(() => {
	wrapper = shallow(<BookForm book={books[0]}/>);
});

test('should render BookForm correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should set title on input change', () => {
	const value = 'Harry';
	wrapper.find('input').simulate('change', {
		target: { value }
	});
	expect(wrapper.state('title')).toBe(value);
});

test('should set description on input change', () => {
	const value = 'New description';
	wrapper.find('textarea').simulate('change', {
		target: { value }
	});
	expect(wrapper.state('description')).toBe(value);
});

test('should submite', () => {
	const onSpySubmit = jest.fn();
	wrapper = shallow(<BookForm onSubmit={onSpySubmit} book={books[0]} />);
	wrapper.find('form').simulate('submit', {
		preventDefault: () => {},
	});
	expect(onSpySubmit).toHaveBeenLastCalledWith({
		title: books[0].title,
		description: books[0].description,
		completedAt: books[0].completedAt
	});
});