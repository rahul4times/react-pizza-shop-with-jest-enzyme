import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import pizzaReducer from './reducers/pizzaReducer';

export default function configureStore(initialState){
  
  const reducers = combineReducers({shop: pizzaReducer});
  const storeEnhancer = applyMiddleware(thunk);
  return createStore(reducers, initialState,
    compose(storeEnhancer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
};
