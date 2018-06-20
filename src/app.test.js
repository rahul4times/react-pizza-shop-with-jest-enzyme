import React from 'react';
import {shallow} from 'enzyme';
import Order from './components/order';
import Shop from './components/shop';
import App from './App';

describe('App component', () => {
  describe('App component', () => {
    const shallowWrapper = shallow(<App/>);

    test('renders correctly', () => {
      expect(shallowWrapper).toMatchSnapshot();
    });

    test('has "Order" component', () => {
      expect(shallowWrapper.containsMatchingElement(<Order/>)).toEqual(true);
    });

    test('has "Shop" component', () => {
      expect(shallowWrapper.containsMatchingElement(<Shop/>)).toEqual(true);
    });

  });
});
