import React from 'react';
import PropTypes from 'prop-types';

class ListItem extends React.Component{
	constructor(props){
		super(props);
		this.state={
			checked: false,
		}
	}

	checked() {
		if(this.state.checked === false){
			this.setState({
			checked: !this.state.checked
			})
		}
	}

	render(){
		return(
			this.props.userList.map((item) => <li><Checkbox checked={this.checked()}/>{item}</li>)
		)
	}
}

class List extends React.Component{
	constructor(props){
		super(props);
		this.userList = [];
		this.state = {
			inputvalue: '',
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	addItem(item) {
		this.userList.push(item);
	}

	handleChange(event) {
		event.preventDefault();
		this.setState({
			inputvalue: event.target.value
		});
	}

	handleSubmit(event) {
		console.log('Form value:' + this.state.inputvalue);
		event.preventDefault();
		this.addItem(this.state.inputvalue);
		this.setState({
			inputvalue: ''
		});
	}

	render(){
		return(
			<div className = 'body'>
				<ul>
					<ListItem userList={this.userList}/>
				</ul>
				<form onSubmit={this.handleSubmit} value= {this.state.inputvalue}>
					<input type='text' name='Add' value={this.state.inputvalue} onChange={this.handleChange}></input>
					<button>Add</button>
				</form>
			</div>
		)
	}
}

class Checkbox extends React.Component{

	handleChange (){
		this.props.checked()
	}

	render(){
		return(
			<input 
				type="checkbox" 
				className="delete" 
				onChange={this.handleChange}
			>
			</input>
		)	
	}
}

List.propTypes = {
	checked: PropTypes.func,
	userList: PropTypes.array,
}

export default List;