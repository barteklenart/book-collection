import { createStore, combineReducers  } from 'redux';
import filters from '../reducers/filters';
import books from '../reducers/books';

export default () => {
	const store = createStore(
		combineReducers({
			books,
			filters
		})
	);

	return store;
};

