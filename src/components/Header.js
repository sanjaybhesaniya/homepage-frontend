import React, { Component } from 'react';
import TechStack from './TechStack';
import Login from './user/Login';
import { FaHome } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';

class Header extends Component {

	constructor() {
		super();

		this.state = {
			id: 0,
			name: "",
			admin: false
		}
	}

	loginUser=(id, name, admin)=> {

		this.setState({
			id: id,
			name: name,
			admin: admin
		})
		this.props.loginUser(id, name, admin);
	}

	openGuestBook=(open)=> {
		this.props.openGuestBook(open);
	}


	render() {

		let gbComponent =
			<button className="btn btn-light" type="button" onClick={() => this.openGuestBook(true)}>
				<FaBook /><br />Guestbook {this.state.name}
			</button>;
		if (this.state.id <= 0) {
			gbComponent = <button className="btn btn-outline-light" type="button">
				<FaBook /><br />Guestbook login only
			</button>;
		}

		let loginArea = <div><button className="btn btn-light" type="button" data-bs-target="#login" data-bs-toggle="modal">
			<FaUser /> Login
				                     </button>
			<Login loginUser={this.loginUser} /></div>;

		let homeButton = <div><button className="btn btn-light" type="button" onClick={() => this.openGuestBook(false)}>
			<FaHome /> Home  </button></div>;
		if (this.props.home !== "") {
			let homeAddress = 'http://'+this.props.home;
			console.log(homeAddress)
			homeButton = <div>
				<a type="button" className="btn btn-light" href={homeAddress}>
					<FaHome /> Home
									 </a></div>;
			gbComponent = "";
			loginArea = "";
		}
		
		

		return (
			<header>
				<div className="container-fluidcontainer py-3 text-center">
					<div className="row">
						<div className="col-sm-1">
							<div className="container-fluidcontainer py-3">
								{homeButton}
							</div>
						</div>
						<div className="col-sm-1">
							<div className="container-fluidcontainer py-3">
								<div>
									<button className="btn btn-success" type="button" data-bs-target="#techstack" data-bs-toggle="modal">
										tech stack
				                     </button>
								</div>
								<TechStack />
							</div>
						</div>
						<div className="col-sm-7">
							<h2 className="text-white">Sanjay Reisebilder</h2>
						</div>
						<div className="col-sm-2">
							<div className="container-fluidcontainer py-3">
								<div>
									{gbComponent}
								</div>
							</div>
						</div>
						<div className="col-sm-1">
							<div className="container-fluidcontainer py-3">
								{loginArea}
							</div>
						</div>
					</div>
				</div>
			</header>
		)

	};
}

export default Header;
