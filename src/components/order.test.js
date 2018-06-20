import React from 'react';
import {shallow} from 'enzyme';
import Order from './order';
describe('Order Component', () => {
  const shallowWrapper = shallow(<Order/>);
  test('renders correctly', () => {
    expect(shallowWrapper.find('div').length).toEqual(1);
  });
});
