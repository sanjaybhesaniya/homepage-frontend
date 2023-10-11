import React, { Component } from 'react'

class SpinnerDisplay extends Component {

	render() {

		return (
			<div className="container-fluid  text-center  pt-5">
				<button className="btn btn-warning btn-lg py-5 px-5" type="button" disabled>
					<span className="spinner-border spinner-border-lg" role="status" aria-hidden="true"></span>
					<h4>Lade Bilder</h4>
				</button>
			</div>
		)
	}

}

export default SpinnerDisplay;