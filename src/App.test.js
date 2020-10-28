import { shallow } from 'enzyme';
import React from 'react';
import { App } from './App';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

it('should render App component', () => {
  expect(wrapper.debug()).toMatchSnapshot();
});
