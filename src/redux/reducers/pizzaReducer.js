import { PIZZA_LOADING, PIZZA_LOADED } from '../actionTypes/actionTypes';

export default function pizzaReducer(state = {}, action = {}) {
  switch (action.type) {
    case PIZZA_LOADING:
      return { ...state, pizza: [] };
    case PIZZA_LOADED:
      return { ...state, pizza: action.pizza };
    default:
      return state;
  }
}
