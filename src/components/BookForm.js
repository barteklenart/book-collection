import React from 'react';

class BookForm extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			title: '',
			description: '',
			completedAt: 0
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
			completedAt: this.state.completedAt
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
				<button type="submit">Add Book</button>
			</form>
		);
	}
}

export default BookForm;