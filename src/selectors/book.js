import moment from 'moment';

export default (books, { sortBy, text, startDate, endDate }) => {
	return books.filter((book) => {
		const createdAtMoment = moment(book.completedAt);
		const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
		const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
		const textMatch = book.title.toLowerCase().includes(text.toLowerCase());
		return textMatch && startDateMatch && endDateMatch;
	}).sort((a, b) => {
		if (sortBy === 'titleup'){
			return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
		} else if (sortBy === 'titledown') {
			return a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1;
		} else if (sortBy === 'dateup'){
			return a.completedAt > b.completedAt ? 1 : -1;
		} else if (sortBy === 'datedown') {
			return a.completedAt < b.completedAt ? 1 : -1;
		}
	});
};