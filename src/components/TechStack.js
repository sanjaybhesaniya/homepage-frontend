import React, { Component } from 'react';
import '../css/Modal.css';

class TechStack extends Component {

	render() {

		return (
			<div className="modal fade bd-example-modal-sm" id="techstack" role="dialog">
				<div className="modal-dialog modal-lg modal-sm modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body text-center">
							<h4 >Frontend</h4>
							<div className="container-fluidcontainer py-3 text-left">
								<div className="row">
									<div className="col-sm-4">
										Bootstrap
												</div>
									<div className="col-sm-8">
										<a target="_blank" rel="noopener noreferrer" href="https://getbootstrap.com/">
											<span className="text-secondary">https://getbootstrap.com
												</span></a>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-4">
										React
												</div>
									<div className="col-sm-8">
										<a target="_blank" rel="noopener noreferrer" href="https://reactjs.org//">
											<span className="text-secondary">https://reactjs.org/
												</span></a>
									</div>
								</div>
								<hr className="text-secondary" />
								<div className="text-center">
									<h4>Backend</h4>
								</div>
								<div className="row">
									<div className="col-sm-4">
										Spring Boot 2 (Java 8)
												</div>
									<div className="col-sm-8">
										<a target="_blank" rel="noopener noreferrer" href="https://spring.io/projects/spring-boot">
											<span className="text-secondary">https://spring.io/projects/spring-boot
												</span></a>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-4">
										PostgreSQL (Navigation,User)
												</div>
									<div className="col-sm-8">
										<a target="_blank" rel="noopener noreferrer" href="https://www.postgresql.org/">
											<span className="text-secondary">https://www.postgresql.org/
												</span></a>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-4">
										MongoDb (Guestbook)
												</div>
									<div className="col-sm-8">
										<a target="_blank" rel="noopener noreferrer" href="https://www.mongodb.com/">
											<span className="text-secondary">https://www.mongodb.com/
												</span></a>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-4">
										Hibernate/JPA (Navigation,User)
												</div>
									<div className="col-sm-8">
										<a target="_blank" rel="noopener noreferrer" href="https://hibernate.org/">
											<span className="text-secondary">https://hibernate.org/
												</span></a>
									</div>
								</div>
								<div className="text-center">
									<hr className="text-secondary" />
									<h4>Runtime</h4>
								</div>
								<div className="row">
									<div className="col-sm-4">
										NGINX Open Source als Reverse Proxy
												</div>
									<div className="col-sm-8">
										<a target="_blank" rel="noopener noreferrer" href="https://www.nginx.com/">
											<span className="text-secondary">https://www.nginx.com/
												</span></a>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-4">
										docker
												</div>
									<div className="col-sm-8">
										<a target="_blank" rel="noopener noreferrer" href="https://www.docker.com/">
											<span className="text-secondary">https://www.docker.com/
												</span></a>
									</div>
								</div>
								<hr className="text-secondary" />
								<div className="text-center">
									<h4>Sources</h4>
								</div>
								<div className="row">
									<div className="col-sm-4">
										GIT Frontend
												</div>
									<div className="col-sm-8">
										<a target="_blank" rel="noopener noreferrer" href="https://github.com/VolkerQuillfeldt/homepage-frontend">
											<span className="text-secondary">https://github.com/VolkerQuillfeldt/homepage-frontend
												</span></a>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-4">
										GIT Backend Navigation/Bilder
												</div>
									<div className="col-sm-8">
										<a target="_blank" rel="noopener noreferrer" href="https://github.com/VolkerQuillfeldt/homepage-backend">
											<span className="text-secondary">https://github.com/VolkerQuillfeldt/homepage-backend
												</span></a>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-4">
										GIT Backend User
												</div>
									<div className="col-sm-8">
										<a target="_blank" rel="noopener noreferrer" href="https://github.com/VolkerQuillfeldt/homepage-user">
											<span className="text-secondary">https://github.com/VolkerQuillfeldt/homepage-user
												</span></a>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-4">
										GIT Backend Guestbook
												</div>
									<div className="col-sm-8">
										<a target="_blank" rel="noopener noreferrer" href="https://github.com/VolkerQuillfeldt/homepage-guestbook">
											<span className="text-secondary">https://github.com/VolkerQuillfeldt/homepage-guestbook
												</span></a>
									</div>
								</div>
								<hr className="text-secondary" />
								<div className="text-center">
									<h4>Hosting</h4>
								</div>
								<div className="row">
									<div className="col-sm-4">
										IONOS VPS vSERVER
												</div>
									<div className="col-sm-8">
										<a target="_blank" rel="noopener noreferrer" href="https://www.ionos.de/server/vps">
											<span className="text-secondary">https://www.ionos.de/server/vps
												</span></a>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-4">
										Centos 8
												</div>
									<div className="col-sm-8">
										<a target="_blank" rel="noopener noreferrer" href="https://www.centos.org">
											<span className="text-secondary">https://www.centos.org
												</span></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)

	};
}

export default TechStack;
