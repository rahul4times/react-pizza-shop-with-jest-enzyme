import { shallow } from 'enzyme';
import { pizzaInfo } from './pizzaAction';
import { PIZZA_LOADING, PIZZA_LOADED } from '../actionTypes/actionTypes';

describe('pizzaInfo', () => {
  test('dispatches PIZZA_LOADING action', () => {
    const dispatch = jest.fn();
    pizzaInfo()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: PIZZA_LOADING });
  });
});
