import React, { Component } from 'react';
import GuestBookBodyAdd from './GuestBookBodyAdd';
import GuestBookBodyList from './GuestBookBodyList';


class GuestBookBody extends Component {

	constructor() {
		super();

		this.state = {
			id: 0,
			name: "",
			actionKey: ""
		}

	};

	changeBody=(actionKey)=> {
		this.props.changeBody(actionKey);
	}

	static getDerivedStateFromProps(props, state) {
		if(props) {
			state.id = props.id;
			state.name = props.name;
			state.actionKey = props.action
		}
	}


	render() {

		let component = < GuestBookBodyList id={this.state.id} name={this.state.name} />
		if (this.state.actionKey === "add") {
			component = < GuestBookBodyAdd id={this.state.id} name={this.state.name} changeBody={this.changeBody} />
		}

		return (

			<div className="container-fluid">
				{component}
			</div>

		)

	};
}

export default GuestBookBody;
