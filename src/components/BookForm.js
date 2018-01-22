import "react-dates/initialize";
import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class BookForm extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			title: '',
			description: '',
			completedAt: props.book ? props.book.completedAt: moment(),
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
		return (
			<form onSubmit={this.onSubmit}>
				<label htmlFor="title">Title:</label>
				<input 
					id="title" 
					type="text"
					value={this.state.title}
					onChange={this.onTitleChange} 
				/>
				<label htmlFor="content">Content</label>
				<textarea 
					id="content" 
					col="10" 
					row="5"
					value={this.state.content}
					onChange={this.onDescriptionChange}
				></textarea>
				<label>Completed</label>
				<SingleDatePicker
					date={this.state.completedAt}
					onDateChange={this.onDateChange}
					focused={this.state.calendarFocused}
					onFocusChange={this.onFocusChange}
				/>
				<button type="submit">Add Book</button>
			</form>
		);
	}
}

export default BookForm;