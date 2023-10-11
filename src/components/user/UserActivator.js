import React, { Component } from 'react';

class UserActivator extends Component {

  constructor() {
    super();

    this.state = {
      messageId: 0,
      messageText: ''
    }

  }


  componentDidMount() {
    
    let fetchString = "/activateUser?actionKey="+encodeURIComponent(this.props.actionKey);

    fetch(fetchString)
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

    let messageClassName = "py-2 text-white";
    if (this.state.messageId === 0) {
      messageClassName += " bg-white";
    } else if (this.state.messageId > 0) {
      messageClassName += " bg-success";
    } else {
      messageClassName += " bg-danger";
    }

    return (
      <div className="container-fluid bg-secondary">
        <div className={messageClassName}>
          {this.state.messageText}
        </div>
        <div className="py-2">  </div>
      </div>
    )
  };


}

export default UserActivator;
