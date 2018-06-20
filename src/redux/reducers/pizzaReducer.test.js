import { shallow } from 'enzyme';
import pizzaReducer from './pizzaReducer';
import { PIZZA_LOADING, PIZZA_LOADED } from '../actionTypes/actionTypes';

describe('pizzaReducer', () => {
  describe('PIZZA_LOADING', () => {
    const action = { type: PIZZA_LOADING };
    const state = { pizza: ['pizza'] };
    test('sets empty pizza array', () => {
      expect(pizzaReducer(state, action)).toEqual({ pizza: [] });
    });
  });
  describe('PIZZA_LOADED', () => {
    const action = { type: PIZZA_LOADED, pizza: ['pizza'] };
    const state = { pizza: [] };
    test('sets value in pizza array', () => {
      expect(pizzaReducer(state, action)).toEqual({ pizza: ['pizza'] });
    });
  });
});
