import React, { Component } from 'react';
import '../../css/Modal.css';

class ResetForm extends Component {

	constructor() {
		super();

		this.state = {
			messageId: 0,
			messageText: ""
		}

	}

	passwordReset() {

		let resetUrl = '/requestNewPasswordforUser';
		
		let email = document.getElementById("inputAccount");

		if ( email.value === "")  return;

		

		fetch(resetUrl, {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			referrerPolicy: 'no-referrer', // no-referrer, *client
			body: JSON.stringify({
				'email':email.value,	
			})
		})
			.then(response => response.json())
			.then((jsonData) => {
				console.log(jsonData);
				// jsonData is parsed json object received from url
				this.setState(
					{
						messageId: jsonData.id,
						messageText: jsonData.message
					}
				);
			})
			.catch((error) => {
				// handle your errors here
				console.error(error)
			});

	}

	setLogin(e) {
		e.stopPropagation()
	}

	render() {

		let buttonClassName = "btn btn-primary";

		let messageClassName = "py-2 text-white";
		if (this.state.messageId === 0) {
			messageClassName += " bg-white";
		} else if (this.state.messageId > 0) {
			messageClassName += " bg-success";
		} else {
			messageClassName += " bg-danger";
		}

		return (

			<div className="modal-body text-center"  onFocus={e => this.setLogin(e)} >
				<div className="container-fluidcontainer text-left bg-white">
					<div className="form-group">
						<label htmlFor="inputAccount">Account</label>
						<input type="text" className="form-control" id="inputAccount" placeholder="account email" />
					</div>
					<div>
						<button type="button" onClick={e => this.passwordReset()} className={buttonClassName}>Reset Password</button>
					</div>
					<div className="py-1"></div>
					<div className={messageClassName}>
						{this.state.messageText}
					</div>
					<div className="py-2">  </div>
				</div>
			</div>
		)

	};
}

export default ResetForm;
