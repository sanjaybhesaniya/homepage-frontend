import React, { Component } from 'react';
import SideNav from './SideNav';

import Body from './Body';

class Main extends Component {

	constructor() {
		super();

		this.state = {
			path: '',
			page: 1,
			count: 10,
			bodyChangeIndex: 0
		}

		this.changeBody = this.changeBody.bind(this);
	};


	changeBody(path , page, count ) {

		this.setState(
			{
				path:path,
				page:page,
				count:count,
				bodyChangeIndex: this.state.bodyChangeIndex + 1
			}
		)
	}

	render() {

		return (
				<div className="container-fluid main" >
					<div className="row">
						<div className="col-lg-2 col-md-4 col-sm-6 col-xs-8">
						<nav className="navbar navbar-expand-sm navbar-light">
						<button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#Navigation" aria-controls="Navigation" aria-expanded="false" aria-label="Toggle navigation">
    						<span className="navbar-toggler-icon"/>
  						</button>
  						<div className="collapse navbar-collapse" id="Navigation">
								<SideNav
										changeBody={this.changeBody} />
						</div>

						</nav>
						</div>
						<div className="col-lg-10 col-md-8 col-sm-6 col-xs-4">
							<div className="container">

								<Body
									key={this.state.bodyChangeIndex}
									path = {this.state.path}
									page = {this.state.page}
									count = {this.state.count}
									changeBody={this.changeBody}/>

							</div>
						</div>
					</div>
				</div>
		)

	};
}

export default Main;
