import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import store from './redux/configureStore';
import {Provider} from 'react-redux'
import defaultStore from './redux/defaultState';

const storeInstance = store(defaultStore);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
