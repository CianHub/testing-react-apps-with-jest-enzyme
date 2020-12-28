import React from 'react';
import App from './App';

import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  console.log(wrapper.debug());
  expect(wrapper).toBeTruthy();
});
