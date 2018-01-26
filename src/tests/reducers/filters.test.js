import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should set set text filter', () => {
	const text = 'text';
	const action = {
		type: 'SET_TEXT_FILTER', 
		text
	};
	const state = filterReducer(undefined, action);
	expect(state.text).toBe(text);
});
test('should set sort by date up', () => {
	const state = filterReducer(undefined, { type: 'SORT_BY_DATE_UP' });
	expect(state.sortBy).toBe('dateup');
});
test('should set sort by date down', () => {
	const state = filterReducer(undefined, { type: 'SORT_BY_DATE_DOWN' });
	expect(state.sortBy).toBe('datedown');
});
test('should set sort by title up', () => {
	const state = filterReducer(undefined, { type: 'SORT_BY_TITLE_UP' });
	expect(state.sortBy).toBe('titleup');
});
test('should set sort by title down', () => {
	const state = filterReducer(undefined, { type: 'SORT_BY_TITLE_DOWN' });
	expect(state.sortBy).toBe('titledown');
});
test('should set startDate filter ', () => {
	const startDate = moment();
	const state = filterReducer(undefined, { type: 'SET_START_DATE', startDate });
	expect(state.startDate).toBe(startDate);
});
test('should set endDate filter', () => {
	const endDate = moment();
	const state = filterReducer(undefined, { type: 'SET_START_DATE', endDate });
	expect(state.endDate).toBe(endDate);
});
