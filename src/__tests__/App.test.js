import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { rootReducer } from '../reducers/counterReducers'

const store: ReduxStore<*,*,*> = createStore(rootReducer);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App/></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
