import React from 'react';
import { shallow } from 'enzyme';

import { BookList } from '../../components/BookList';
import books from '../fixtures/book';

test('should render BookList correctly', () => {
	const wrapper = shallow(<BookList books={books} />);
	expect(wrapper).toMatchSnapshot();
});

test('should render BookList with empty books array', () => {
	const wrapper = shallow(<BookList books={[]}/>);
	expect(wrapper).toMatchSnapshot();
});