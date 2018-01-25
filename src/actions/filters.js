export const setTextFilter = (text = '') => {
	return {
		type: 'SET_TEXT_FILTER',
		text
	};
};

export const sortByDateUp = () => {
	return {
		type: 'SORT_BY_DATE_UP',
	};
};

export const sortByDateDown = () => {
	return {
		type: 'SORT_BY_DATE_DOWN',
	};
};

export const sortByTitleUp = () => {
	return {
		type: 'SORT_BY_TITLE_UP'
	};
};

export const sortByTitleDown = () => {
	return {
		type: 'SORT_BY_TITLE_DOWN'
	};
};

export const setStartDate = (startDate) => ({
	type: 'SET_START_DATE',
	startDate
});

export const setEndDate = (endDate) => ({
	type: 'SET_END_DATE',
	endDate
});