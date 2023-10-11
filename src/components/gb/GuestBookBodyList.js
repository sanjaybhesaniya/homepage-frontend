import React, { Component } from 'react';

class GuestBookBodyList extends Component {

	constructor() {
		super();

		this.state = {
			id: 0,
			name: "",
			entries: []
		}
	};

	componentDidMount() {
		this.setState(
			{
				id: this.props.id,
				name: this.props.name
			}
		)

		fetch('/readEntriesGuestBook')
			.then(response => response.json())
			.then((jsonData) => {
				// jsonData is parsed json object received from url
				this.setState(
					{
						entries: jsonData,
					}
				);
			})
			.catch((error) => {
				// handle your errors here
				console.error(error)
			});


	}


	render() {

		var entryArray = [];
		if (this.state.entries.length > 0) {
			for (let i = 0; i < this.state.entries.length; i++) {
				entryArray.push(
					<div id={i} className="card py-1">
						<div className="card-body">
							<h6 className="card-subtitle mb-2 bg-secondary text-white">{this.state.entries[i].userName} {this.state.entries[i].creationDateTime}</h6>
							<p className="card-text"
								dangerouslySetInnerHTML={{ __html: this.state.entries[i].content }}/>
						</div>
					</div>
				)
				entryArray.push(
					<div id={i + 'a'} className="py-1 bg-secondary"/>
				)
			}
		}

		return (
			<div className="container-fluid" >
				{entryArray}
			</div>

		)

	};
}

export default GuestBookBodyList;
