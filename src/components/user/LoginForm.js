import React, { Component } from 'react';
import '../../css/Modal.css';

class LoginForm extends Component {

	constructor() {
		super();

		this.state = {
			messageId: 0,
			messageText: ""
		}

	}

	loginUser() {

		let loginURL = '/loginUser';

		let email = document.getElementById("inputAccount");
		let pwd = document.getElementById("inputPassword");

		if (email.value === "" || pwd.value === "") return;

		fetch(loginURL, {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			referrerPolicy: 'no-referrer', // no-referrer, *client
			body: JSON.stringify({
				'email': email.value,
				'password': pwd.value
			})
		})
			.then(response => response.json())
			.then((jsonData) => {
				console.log(jsonData);
				// jsonData is parsed json object received from url
				if (jsonData.id < 0) {
					this.setState(
						{
							messageId: jsonData.id,
							messageText: jsonData.message
						}
					);
				} else {
					this.props.loginUser(jsonData.id,jsonData.userName, jsonData.admin);
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
			messageClassName += " bg-white";
		} else if (this.state.messageId > 0) {
			messageClassName += " bg-success";
		} else {
			messageClassName += " bg-danger";
		}

		return (

			<div className="modal-body text-center">
				<div className="container-fluidcontainer text-left bg-white">
					<div className="form-group">
						<label htmlFor="inputAccount">Account</label>
						<input type="text" className="form-control" id="inputAccount" placeholder="account email" />
					</div>
					<div className="form-group">
						<label htmlFor="inputPassword">Password</label>
						<input type="password" className="form-control" id="inputPassword" placeholder="password" />
					</div>
					<div>
						<button type="button" onClick={e => this.loginUser()} className={buttonClassName}>Login</button>
					</div>
					<div className="py-1"></div>
					<div>
						<button type="button" onClick={e => this.props.changeToRegister('reset')} className={buttonClassName}>Request password reset</button>
					</div>
					<div className="py-1"></div>
					<div>
						<button type="button" onClick={e => this.props.changeToRegister('register')} className={buttonClassName}>Register account</button>
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

export default LoginForm;
