import React from 'react';
import App from './App';

import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

/**
 * Factory function create a shallow wrapper for app component
 * @function setup
 * @returns {Enzyme.ShallowWrapper}
 */
const setup = (): Enzyme.ShallowWrapper => shallow(<App />);

const findByTestAttr = (
  wrapper: Enzyme.ShallowWrapper,
  selector: string
): Enzyme.ShallowWrapper<
  Enzyme.HTMLAttributes,
  any,
  React.Component<{}, {}, any>
> => wrapper.find(`[data-test='${selector}']`);

test('renders app without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'component-button');
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const display = findByTestAttr(wrapper, 'component-display');
  expect(display.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, 'component-count').text();
  expect(count).toBe('0');
});

test('increments counter on click', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'component-button');
  button.simulate('click');
  const count = findByTestAttr(wrapper, 'component-count').text();
  expect(count).toBe('1');
});
