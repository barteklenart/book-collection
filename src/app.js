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


store.dispatch(addBook({ id: "2ae36e22-26ab-4575-b352-aa8f69c7544c", title: "Hary Poter", description: "Some description", completedAt: 1516878000000 }))
store.dispatch(addBook({ id: "6ae12e22-26ab-5751-b431-aa8f69c7544c", title: "Win or learn", description: "Some description", completedAt: 1518878000000 }))
// store.dispatch(addBook({ id: "c18868dc-258c-497c-892b-69f7c0ed4bfe", title: "Abc", description: "asdf", completedAt: 1516878000000 }))
// store.dispatch(addBook({ id: "0a58f118-5557-463f-be81-6a34b6aa36f5", title: "bce", description: "asdf", completedAt: 1516821435254 }))
// store.dispatch(addBook({ id: "7947bfa8-4e93-4d02-afe4-aca496c3454f", title: "test", description: "asdf", completedAt: 1519815600000 }))
// store.dispatch(addBook({ id: "90fd744a-d94d-4b9e-ad57-b1f782182b0a", title: "Alex Ferguson", description: "Alex", completedAt: 1519902000000 }))

const app = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(app, appDomEl);