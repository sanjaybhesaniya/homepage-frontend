import React, { Component } from 'react';
import GuestBookNavigation from './GuestBookNavigation';
import GuestBookBody from './GuestBookBody';

class GuestBook extends Component {

	constructor() {
		super();

		this.state = {
			id: 0,
			name: "",
			action: "list"
		}

		this.changeBody = this.changeBody.bind(this);
	};

	changeBody(action) {
		console.log( "gb"+action);

		this.setState(
			{
				action: action
			}
		);
	}

	componentWillMount() {

		this.setState(
			{
				id: this.props.id,
				name: this.props.name
			}
		)
	}


	render() {

		console.log( "gb render "+this.state.action)

		return (
			<main>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-3 col-sm-6 col-xs-7">
							<GuestBookNavigation name={this.state.name} id={this.state.id} changeBody={this.changeBody} />
						</div>
						<div className="col-md-9 col-sm-6 col-xs-5">
							<GuestBookBody action ={this.state.action} name={this.state.name} id={this.state.id} changeBody={this.changeBody} />
						</div>
					</div>
				</div>
			</main >
		)

	};
}

export default GuestBook;
