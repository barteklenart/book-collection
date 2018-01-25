import "react-dates/initialize";
import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

import { setTextFilter, sortByDateUp, sortByDateDown, sortByTitleUp, sortByTitleDown, setStartDate, setEndDate } from '../actions/filters';

class BookListFilters extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			searchText: '',
			startDate: moment(),
			endDate: moment(),
			focusedInput: null
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

	onDatesChange = ({ startDate, endDate }) => {
		this.setState({ startDate, endDate });
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	}

	onFocusChange = (focusedInput) => {
		this.setState({ focusedInput });
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
				<DateRangePicker
					startDate={this.state.startDate} 
					startDateId="startDateId" 
					endDate={this.state.endDate} 
					endDateId="endDateId" 
					onDatesChange={this.onDatesChange} 
					focusedInput={this.state.focusedInput}
					onFocusChange={this.onFocusChange} 
				/>
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
		sortByTitleDown: (filter) => dispatch(sortByTitleDown(filter)),
		setStartDate: (startDate) => dispatch(setStartDate(startDate)),
		setEndDate: (endDate) => dispatch(setEndDate(endDate))
	}
}

export default connect(undefined, mapDispatchToProps)(BookListFilters);