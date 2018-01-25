
import React from 'react';
import { connect } from 'react-redux';


import { setTextFilter, sortByDateUp, sortByDateDown, sortByTitleUp, sortByTitleDown } from '../actions/filters';

class BookListFilters extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			searchText: '',
			date: null,
			calendarFocused: false
		}
	}

	onInputChange = (e) => {
		const searchText = e.target.value;
		this.setState({
			searchText
		});
		this.props.setTextFilter(searchText);
	}

	onSelect = (e) => {
		const { value } = e.target;

		switch(value){
			case 'dateup':
				this.props.sortByDateUp(value)
				break;
			case 'datedown':
				this.props.sortByDateDown(value)
				break;
			case 'titleup':
				this.props.sortByTitleUp(value);
				break;
			case 'titledown':
				this.props.sortByTitleDown(value);
		}
	}

	onDateChange = (date) => {
		this.setState({ date })
	}

	onFocusChange = (calendar) => {
		const { focused } = calendar
		this.setState({ 
			calendarFocused: focused
		});
	}

	render() {
		return (
			<div>
				<input
					type="text"
					value={this.state.searchText}
					onChange={this.onInputChange}
				/>
				<select onChange={this.onSelect}>
					<option value="dateup">Date ↑</option>
					<option value="datedown">Date ↓</option>
					<option value="titleup">Title ↑</option>
					<option value="titledown">Title ↓</option>
				</select>
			</div>
		);
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		setTextFilter: (text) => dispatch(setTextFilter(text)),
		sortByDateUp: (filter) => dispatch(sortByDateUp(filter)),
		sortByDateDown: (filter) => dispatch(sortByDateDown(filter)),
		sortByTitleUp: (filter) => dispatch(sortByTitleUp(filter)),
		sortByTitleDown: (filter) => dispatch(sortByTitleDown(filter))
	}
}

export default connect(undefined, mapDispatchToProps)(BookListFilters);