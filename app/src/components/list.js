import React from 'react';

class List extends React.Component{
	constructor(props){
		super(props);
		this.userList=[];
	}

	addItem(item){
		this.userList.push(
			<div>
				<Delete />
				<li>{item}</li>
			</div>
		)
	}

	render(){
		return(
			<div className = 'body'>
				<ul>
					{this.userList}
				</ul>
				<Form addItem = {this.addItem} userList = {this.userList}/>
			</div>
		)
	}
}

class Form extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			inputvalue: '',
			userList: [],
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.userList = [];
	}

	handleChange(event) {
		this.setState({
			inputvalue: event.target.value
		})
	}

	handleSubmit(event) {
		console.log('Form value:' + this.state.inputvalue);
		event.preventDefault();
		this.props.addItem(this.state.inputvalue);
		this.setState({
			inputvalue: ''
		});
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit} onChange={this.handleChange}>
				<input type='text' name='Add' value={this.state.inputvalue} onChange={this.handleChange}></input>
				<button>Add</button>
			</form>
		)
	}
}

class Delete extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			checked: false,
		}
	}

	handleChange() {
		this.setState(
			{checked: !this.state.checked}
		)
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

export default List;