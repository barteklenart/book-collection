import "react-dates/initialize";
import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class BookForm extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			title: props.book ? props.book.title : '',
			description: props.book ? props.book.description : '',
			completedAt: props.book ? moment(props.book.completedAt) : moment(),
			calendarFocused: null
		};
	}

	onTitleChange = (e) => {
		this.setState({
			title: e.target.value
		});
	}

	onDescriptionChange = (e) =>{
		this.setState({
			description: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit({
			title: this.state.title,
			description: this.state.description,
			completedAt: this.state.completedAt.valueOf()
		})
	}

	onDateChange = (completedAt) => {
		this.setState({ completedAt });
	}

	onFocusChange = ({ focused }) => {
		this.setState({
			calendarFocused: focused
		})
	}

	render(){
		const btnText = this.props.book ? 'Edit Book' : 'Add book';
		const btnType = this.props.book ? 'btn-success' : 'btn-primary';
		return (
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label htmlFor="title">Title:</label>
						<input
							id="title"
							type="text"
							value={this.state.title}
							onChange={this.onTitleChange}
							className="form-control"
						/>	
					</div>
					<div className="form-group">
						<label htmlFor="description">Description</label>
						<textarea
							id="description"
							col="10"
							row="5"
							value={this.state.description}
							onChange={this.onDescriptionChange}
							className="form-control"
						></textarea>
					</div>
					<div className="form-group">
						<label>Completed</label>
						<SingleDatePicker
							date={this.state.completedAt}
							onDateChange={this.onDateChange}
							focused={this.state.calendarFocused}
							onFocusChange={this.onFocusChange}
						/>
					</div>
					<button type="submit" className={`btn ${btnType}`}>{btnText}</button>
				</form>

		);
	}
}

export default BookForm;