import React from 'react';
import { shallow } from 'enzyme';
import Order from './components/order';
import Shop from './components/shop';
import App from './App';

describe('App component', () => {
  let shallowWrapper;
  beforeEach(() => {
    shallowWrapper = shallow(<App />);
  });
  describe('App component', () => {
    test('renders correctly', () => {
      expect(shallowWrapper).toMatchSnapshot();
    });

    test('has "Order" component', () => {
      expect(shallowWrapper.containsMatchingElement(<Order />)).toEqual(true);
    });

    test('has "Shop" component', () => {
      expect(shallowWrapper.containsMatchingElement(<Shop />)).toEqual(true);
    });
  });
});
