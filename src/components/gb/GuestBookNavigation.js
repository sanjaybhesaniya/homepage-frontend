import React, { Component } from 'react';

class GuestBookNavigation extends Component {

	constructor() {
		super();

		this.state = {
			id: 0,
			name: ""
		}
		this.changeBody = this.changeBody.bind(this);

	};


	changeBody(action) {
		console.log( "nav"+action);
		this.props.changeBody(action);
	};

	componentWillMount() {
		this.setState(
			{
				id: this.props.id,
				name: this.props.name
			}
		)
	}


	render() {

		return (
			<div className="container-fluid text-white border-0">
				<h3>Guestbook</h3>
				<h4>logged in as {this.state.name}</h4>
				<div className="py-1"></div>
				<button type="button" className="btn btn-warning btn-sm" href='#' onClick={e => this.changeBody("add")}>add Entry</button>
				<div className="py-1"></div>
				<button type="button" className="btn btn-warning btn-sm" href='#' onClick={e => this.changeBody("list")}>list entries</button>
				<div className="py-1"></div>
			</div>

		)

	};
}

export default GuestBookNavigation;
