import React, { Component } from 'react';
import JoditEditor from "jodit-react";


class GuestBookBodyAdd extends Component {

	constructor() {
		super();

		this.state = {
			id: 0,
			name: "",
			messageId: 0,
			messageText: ""
		}

		this.changeBody  = this.changeBody.bind(this);
	};

	changeBody(actionKey){
		this.props.changeBody(actionKey);
	}

	contentHTML = "";

	updateContent(value) {
		this.contentHTML = value;
	}

	componentDidMount() {
		this.setState(
			{
				id: this.props.id,
				name: this.props.name
			}
		)
	}

	saveEntry() {		

		let addEntryURL = '/addEntryGuestBook';

		fetch(addEntryURL, {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			referrerPolicy: 'no-referrer', // no-referrer, *client
			body: JSON.stringify({
				userId: this.props.id,
				userName: this.props.name,
				content: this.contentHTML
			})
		})
			.then(response => response.json())
			.then((jsonData) => {
				// jsonData is parsed json object received from url
				if (jsonData.id < 0) {
					this.setState(
						{
							messageId: jsonData.id,
							messageText: jsonData.message
						}
					);
				} else if(jsonData.id > 0) {
					this.changeBody("list");
				} else{
					console.log("?");
				}
			})
			.catch((error) => {
				// handle your errors here
				console.error(error)
			});

	}


	render() {

		let buttonClassName = "btn btn-primary";

		let messageClassName = "py-2 text-white";
		if (this.state.messageId === 0) {
			messageClassName += " bg-secondary";
		} else if (this.state.messageId > 0) {
			messageClassName += " bg-success";
		} else {
			messageClassName += " bg-danger";
		}

		return (

			<div className="container-fluid">
				<JoditEditor
					value={this.contentHTML}
					config={{
						readonly: false // all options from https://xdsoft.net/jodit/play.html
					}}
					onChange={this.updateContent.bind(this)}
				/>
				<div className="py-2"></div>
				<div>
					<button type="button" onClick={e => this.saveEntry()} className={buttonClassName}>Save</button>
				</div>
				<div className="py-1"></div>
				<div className={messageClassName}>
					{this.state.messageText}
				</div>
				<div className="py-2">  </div>
			</div>
		)

	};
}

export default GuestBookBodyAdd;
