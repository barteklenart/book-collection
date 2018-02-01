import { createStore, combineReducers, applyMiddleware, compose   } from 'redux';
import filters from '../reducers/filters';
import books from '../reducers/books';
import thunk from 'redux-thunk';

export default () => {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const store = createStore(
		combineReducers({
			books,
			filters
		}),
		composeEnhancers(applyMiddleware(thunk))
	);

	return store;
};

