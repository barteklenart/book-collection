import React from 'react';
import { shallow } from 'enzyme';

import { EditBook } from '../../components/EditBook';

test('should render EditBook correctly', () => {
	const wrapper = shallow(<EditBook />);
	expect(wrapper).toMatchSnapshot();
});
