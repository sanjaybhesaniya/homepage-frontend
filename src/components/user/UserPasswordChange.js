import React, { Component } from 'react';

class UserPasswordChange extends Component {
	constructor() {
		super();

		this.state = {
			passwordStength: "Type Password",
			passwordEquals: "Type equal Password",
			minStrengthReached: false,
			passwordSubmit: false,
			messageId:0,
			messageText:""
		}

	}

	passwordChanged(e) {

		var pwd = e.target;
		var confirm = document.getElementById("inputPasswordSecond");
		if (e.target.id !== "inputPasswordFirst") {
			confirm = e.target;
			pwd = document.getElementById("inputPasswordFirst");
		}

		var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
		var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
		var enoughRegex = new RegExp("(?=.{6,}).*", "g");

		if (pwd.value.length === 0) {
			this.setState({
				passwordStength: "Type Password"
			})
		} else if (false === enoughRegex.test(pwd.value)) {
			this.setState({
				passwordStength: "More Characters"
			})
		} else if (strongRegex.test(pwd.value)) {
			this.setState({
				passwordStength: "Strong!",
				minStrengthReached: true
			})
		} else if (mediumRegex.test(pwd.value)) {
			this.setState({
				passwordStength: "Medium!",
				minStrengthReached: true
			})
		} else {
			this.setState({
				passwordStength: "Weak!",
				minStrengthReached: true
			})
		}

		if (this.state.minStrengthReached && pwd.value.length > 0 && confirm.value.length > 0) {
			this.setState({
				passwordEquals: "Type equal Password",
				passwordSubmit: false
			})
			if (pwd.value === confirm.value) {
				this.setState({
					passwordEquals: "Password equals",
					passwordSubmit: true
				})
			}
		}

	}


	commitPassword() {
		
		if(! this.state.passwordSubmit) return;

		let pwd = document.getElementById("inputPasswordFirst");
		let fetchString = "/setnewPasswordforUser?actionKey";
		
		fetch(fetchString, {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			referrerPolicy: 'no-referrer', // no-referrer, *client
			body: JSON.stringify({
				'password': pwd.value,
				'actionKey':this.props.actionKey
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



	render() {

		let buttonClassName = "btn btn-primary";
		let equalClassName = "text-success";
		if (!this.state.passwordSubmit) {
			buttonClassName += " disabled";
			equalClassName = "text-black";
		}

		let messageClassName = "py-2 text-white";
		if( this.state.messageId === 0){
			messageClassName += " bg-white";
		}else if( this.state.messageId > 0){
			messageClassName += " bg-success";
		}else{
			messageClassName += " bg-danger";
		}

		let strengthClassName = "text-black";
		if( this.state.minStrengthReached){
			strengthClassName = "text-success";
		}


		return (

			<div className="container-fluidcontainer py-3 text-left bg-secondary">
				<div className="row">
					<div className="col-sm"></div>
					<div className="col-sm  bg-white">
						<div className="form-group">
							<label htmlFor="inputPasswordFirst">Password</label>
							<input type="password" onKeyUpCapture={e => this.passwordChanged(e)} className="form-control" id="inputPasswordFirst" placeholder="Password" />
							<span className={strengthClassName}>{this.state.passwordStength}</span>
						</div>
						<div className="form-group">
							<label htmlFor="inputPasswordSecond">Retype Password</label>
							<input type="password" onKeyUpCapture={e => this.passwordChanged(e)} className="form-control" id="inputPasswordSecond" placeholder="Password" />
							<span className={equalClassName}>{this.state.passwordEquals}</span>
						</div>
						<div>
							<button type="button" onClick={e => this.commitPassword()} className={buttonClassName}>Change Password</button>
						</div>
						<div className = "py-1"></div>
						<div className={messageClassName}>
							{this.state.messageText}
							</div>
						<div className="py-2">  </div>
					</div>
					<div className="col-sm"></div>
				</div>
			</div>

		)

	};
}

export default UserPasswordChange;

