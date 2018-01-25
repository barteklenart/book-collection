export default (books, filters) => {
	return books.filter((book) => {
		const textMatch = book.title.toLowerCase().includes(filters.text.toLowerCase());
		return textMatch;
	}).sort((a, b) => {
		if (filters.sortBy === 'titleup'){
			return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
		} else if (filters.sortBy === 'titledown') {
			return a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1;
		} else if (filters.sortBy === 'dateup'){
			return a.completedAt > b.completedAt ? 1 : -1;
		} else if (filters.sortBy === 'datedown') {
			return a.completedAt < b.completedAt ? 1 : -1;
		}
	});
};