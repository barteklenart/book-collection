import { setTextFilter, sortByDateUp, sortByDateDown, sortByTitleUp, sortByTitleDown, setStartDate, setEndDate} from '../../actions/filters';
import moment from 'moment';

test('should generate set text filter object with text value', () => {
	const action = setTextFilter('text');
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: 'text'
	});
});

test('should generate set start date action object', () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0)
	});
});

test('should generate set end date action object', () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: 'SET_END_DATE',
		endDate: moment(0)
	});
});

test('should generate action object for sort by date up ', () => {
	const action = sortByDateUp();
	expect(action).toEqual({
		type: 'SORT_BY_DATE_UP'
	});
});

test('should generate action object for sort by date down ', () => {
	const action = sortByDateDown();
	expect(action).toEqual({
		type: 'SORT_BY_DATE_DOWN'
	});
});
test('should generate action object for sort by titile up ', () => {
	const action = sortByTitleUp();
	expect(action).toEqual({
		type: 'SORT_BY_TITLE_UP'
	});
});
test('should generate action object for sort by title down ', () => {
	const action = sortByTitleDown();
	expect(action).toEqual({
		type: 'SORT_BY_TITLE_DOWN'
	});
});