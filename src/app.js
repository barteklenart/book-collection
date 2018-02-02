import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addBook } from './actions/books';

const store = configureStore(); 
const appDomEl = document.getElementById('app');

store.subscribe(() =>{
	console.log(store.getState());
});

const app = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(app, appDomEl);