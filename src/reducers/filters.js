import moment from 'moment';

const defaultState = {
	text: '', 
	sortBy: 'title', 
	startDate: moment().startOf('month'), 
	endDate: moment().endOf('month')
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.text
			}
		case 'SORT_BY_DATE_UP':
			return {
				...state,
				sortBy: 'dateup'
			}
		case 'SORT_BY_DATE_DOWN':
			return {
				...state,
				sortBy: 'datedown'
			}
		case 'SORT_BY_TITLE_UP':
			return {
				...state,
				sortBy: 'titleup'
			}
		case 'SORT_BY_TITLE_DOWN':
			return {
				...state,
				sortBy: 'titledown'
			}
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.startDate
			}
		case 'SET_END_DATE': 
			return {
				...state,
				endDate: action.endDate
			}
		default:
			return state;
	}
};