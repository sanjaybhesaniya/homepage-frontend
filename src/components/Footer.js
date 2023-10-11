import React, { Component } from 'react';

class Footer extends Component {

	render() {

		return (
			<footer>
				<div className="container-fluidcontainer py-3">
					<div>
						<button type="button" data-bs-target="#impressum" data-bs-toggle="modal">
							Impressum
					</button>
					</div>
					<div className="modal fade bd-example-modal-sm" id="impressum" role="dialog">
						<div className="modal-dialog modal-sm modal-dialog-centered" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body">
									<h2>Impressum</h2>
									<p>Volker Quillfeldt<br />
										Burgfriedenstrasse 1<br />
										60489 Frankfurt am Main
									</p>
									<p>
										Telefon: +49(172)6578246<br />
										E-Mail: <a href="mailto:admin@vquillfeldt.de"><span className="text-secondary">admin@vquillfeldt.de</span></a>
									</p>									</div>
							</div>

						</div>
					</div>
				</div>
			</footer>
		)

	};
}

export default Footer;
