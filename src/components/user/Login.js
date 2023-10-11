import React, { Component } from 'react';
import '../../css/Modal.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ResetForm from './ResetForm';
import $ from 'jquery';

class Login extends Component {

	constructor() {
		super();

		this.state = {
			login: 'login'
		}

	};

	setLogin() {
		//initial immer Login
		this.setState({
			login: 'login'
		})
	};

	loginUser=(id, name, admin)=> {
		this.props.loginUser(id, name, admin);
		$('#closeButton').click();
	}

	changeToRegister=(val)=> {
		this.setState({
			login: val
		})
	};

	render() {

		let bodyComponent = < LoginForm changeToRegister={this.changeToRegister} loginUser={this.loginUser} />;
		if (this.state.login === 'register') {
			bodyComponent = < RegisterForm />;
		} else if (this.state.login === 'reset') {
			bodyComponent = < ResetForm />;
		}

		return (
			<div className="modal fade bd-example-modal-sm" id="login" role="dialog" onFocus={(e) => this.setLogin(e)} >
				<div className="modal-dialog modal-sm modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button id="closeButton" type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div>{bodyComponent}</div>
					</div>
				</div>
			</div>
		)

	};
}

export default Login;
