import React from 'react';
import {shallow} from 'enzyme';
import Shop from './shop';
describe('Shop Component', () => {
  const shallowWrapper = shallow(<Shop/>);
  test('renders correctly', () => {
    expect(shallowWrapper).toMatchSnapshot();
  });
});
