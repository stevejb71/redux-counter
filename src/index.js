// @flow strict

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import type { Store as ReduxStore } from 'redux';
import { rootReducer } from './reducers/counterReducers'

const store: ReduxStore<*,*,*> = createStore(rootReducer);

const root = document.getElementById('root')
if(root !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    root
  )
}
registerServiceWorker();
