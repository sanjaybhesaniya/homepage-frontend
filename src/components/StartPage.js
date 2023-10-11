import React, { Component } from 'react'
import '../css/App.css';
import '../css/Modal.css'

class StartPage extends Component {


  constructor() {
    super();

    this.state = {
      myPictures: [],
    }

  };


  componentDidMount() {
    
    fetch('/getStartPage')
        .then(response => response.json())
        .then((jsonData) => {
          // jsonData is parsed json object received from url
          this.setState(
            {
              myPictures: jsonData.myPictures,
            }
          );
        })
        .catch((error) => {
          // handle your errors here
          console.error(error)
        });
    
  }


  render() {

    var olArray = [];
    for (let i = 0; i < this.state.myPictures.length; i++) {
      if (i === 0) {
        olArray.push(<li key={i} data-bs-target="#carouselIndicators" data-bs-slide-to={i} className="active"/>)
      } else {
        olArray.push(<li key={i} data-bs-target="#carouselIndicators" data-bs-slide-to={i} />)
      }
    }

    var picArray = [];
    for (let i = 0; i < this.state.myPictures.length; i++) {
      if (i === 0) {
        picArray.push(<div key={i} className="carousel-item active">
          <img alt="" className="d-block modal-img" src={'data:image/png;base64, ' + this.state.myPictures[i]} />
        </div>)
      } else {
        picArray.push(<div key={i} className="carousel-item">
          <img alt="" className="d-block modal-img" src={'data:image/png;base64, ' + this.state.myPictures[i]} />
        </div>)
      }
    }

    return (
      <div className="container-fluid">
        <div id="carouselIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
          <ol className="carousel-indicators" >
            {olArray}
          </ol>
          <div className="carousel-inner" >
            {picArray}
          </div>
          <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselIndicators" role="button" data-bs-slide="next">
            <span className="sr-only">Next</span>
            <span className="carousel-control-next-icon" aria-hidden="true" />
          </a>
        </div>
      </div>
    )
  }
}

export default StartPage;