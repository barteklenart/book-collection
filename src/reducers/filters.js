export default (state = { text: '', sortBy: 'title' }, action) => {
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
		default:
			return state;
	}
};