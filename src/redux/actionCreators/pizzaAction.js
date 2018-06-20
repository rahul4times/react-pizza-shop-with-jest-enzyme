import {PIZZA_LOADING, PIZZA_LOADED} from '../actionTypes/actionTypes';

export function pizzaInfo(){
  return dispatch => {
    dispatch({type: PIZZA_LOADING});

    setTimeout(() => {
      const pizza = [{
        size: 'M',
        sauce: 'Marinara',
        cheese: 'Yes',
        toppings: {onion: false, mushroom: false, tomato: false}
      }];
      dispatch({type: PIZZA_LOADED, pizza});
    }, 1000);
  }
};
