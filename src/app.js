import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addBook } from './actions/books';

const store = configureStore(); 
const appDomEl = document.getElementById('app');
window.store = store;

store.subscribe(() =>{
	console.log(store.getState());
})

store.dispatch(addBook({ id: "2ae36e22-26ab-4575-b352-aa8f69c7544c", title: "Hary Poter", description: "Some description", completedAt: 1516878000000 }))
store.dispatch(addBook({ id: "6ae12e22-26ab-5751-b431-aa8f69c7544c", title: "Win or learn", description: "Some description", completedAt: 1518878000000 }))

const app = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(app, appDomEl);