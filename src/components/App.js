import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import UserActivator from './user/UserActivator';
import UserPasswordChange from './user/UserPasswordChange';
import GuestBook from './gb/GuestBook';
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {

  constructor() {
    super();

    this.state = {
      id: 0,
      name: "",
      admin: false,
      openGuestBook: false
    }

  }

  openGuestBook=(openGuestBook) =>{
    this.setState({
      openGuestBook: openGuestBook
    });
  }

  loginUser=(id, name, admin) =>{
    this.setState({
      id: id,
      name: name,
      admin: admin,
      openGuestBook:true
    })
  }


  render() {

    const queryString = window.location.search;
    const query = 'actionKey=';
    let pos = queryString.indexOf(query) + query.length;
    let actionKey = queryString.substr(pos)

    let component = <Main />;
    if (this.state.openGuestBook) {
      component = < GuestBook name={this.state.name} id={this.state.id}/>
    }

    return (
      <div className="container-fluid bg-secondary scrollY">
        <BrowserRouter>
          <Routes>
            <Route path="/openActivate" element={<React.Fragment><Header home={window.location.hostname} /><UserActivator actionKey={actionKey} /></React.Fragment>}/>
            <Route path="/openChangePassword" element={<React.Fragment><Header home={window.location.hostname} /><UserPasswordChange actionKey={actionKey}/></React.Fragment>}/>
            <Route path="/" element={<React.Fragment><Header loginUser={this.loginUser} openGuestBook={this.openGuestBook} home=""/>{component}</React.Fragment>}/>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}

export default App;
