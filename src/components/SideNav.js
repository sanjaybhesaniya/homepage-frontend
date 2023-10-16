import React, {Component} from 'react';
import Continent from './Continent';

class SideNav extends Component {

  constructor() {
    super();

    this.state = {
      myContinents: []
    }
    this.changeBody = this.changeBody.bind(this);

  };

  changeBody(path, page, count) {
    this.props.changeBody(path, page, count);
  };

  componentDidMount() {
    // prod run as below
    // fetch('/getNavigation')
    // local run as below
    fetch('http://localhost:8081/getNavigation')
    .then(response => response.json())
    .then((jsonData) => {
      // jsonData is parsed json object received from url
      this.setState(
          {
            myContinents: jsonData
          }
      );
    })
    .catch((error) => {
      // handle your errors here
      console.error(error)
    });
  }

  render() {

    return (
        <div className="container-fluid" >
          <div className={"row"}>
            <div className={"col-12"}>
              <div className={"navigationBody"}>
              {this.state.myContinents.map((item, index) => (
                  <Continent
                      key={index}
                      continent={item.continent}
                      countries={item.countries}
                      changeBody={this.changeBody}
                  />
              ))}
              </div>
            </div>
          </div>
        </div>
    )

  };
}

export default SideNav;
