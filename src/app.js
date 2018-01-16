import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import { createStore } from 'redux';
import reducers from './reducers/books';
const store = createStore(reducers);

const appDomEl = document.getElementById('app');

const app = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(app, appDomEl);