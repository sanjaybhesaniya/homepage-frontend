import React, {Component} from 'react';
import StartPage from './StartPage';
import SpinnerDisplay from './SpinnerDisplay';

class Body extends Component {

  constructor() {
    super();

    this.state = {
      myPictures: [],
      position: 1,
      isfinal: false,
      isloading: true,
    }

  };

  componentDidMount() {
    if (!this.state.isfinal && this.props.path !== '') {
      // prod run as below
      //fetch('/getRollingPictures?position=' + this.state.position + '&path='+ this.props.path)
      // local run as below
      fetch('http://localhost:8081/getRollingPictures?position=' + this.state.position + '&path='+ this.props.path)
      .then(response => response.json())
      .then((jsonData) => {
        // jsonData is parsed json object received from url
        let pictures = [...this.state.myPictures]
        jsonData.myPictures.forEach(item => pictures.push(item));
        const position = this.state.position + 1;
        this.setState(
            {
              myPictures: pictures,
              position: position,
              isfinal: jsonData.isfinal,
              isloading: ! jsonData.isfinal,
            }
        );
      })
      .catch((error) => {
        // handle your errors here
        console.error(error)
      });
      window.scrollTo(0, 0);
    }
  }

  handleScroll = (e) => {
    if (!this.state.isfinal && !this.state.isloading) {
      if ((e.currentTarget.scrollTop + e.currentTarget.offsetHeight) / e.currentTarget.scrollHeight
          > 0.75) {
        const position = this.state.position + 1;
        this.setState(
            {
              position: position,
              isloading: true,
            }
        );
      }
    }
  }

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
    if (this.state.position !== prevState.position) {
      // prod run as below
      //fetch('/getRollingPictures?position=' + this.state.position + '&path='+ this.props.path)
      // local run as below
      fetch('http://localhost:8081/getRollingPictures?position=' + this.state.position + '&path='+ this.props.path)
      .then(response => response.json())
      .then((jsonData) => {
        // jsonData is parsed json object received from url
        let pictures = [...this.state.myPictures]
        jsonData.myPictures.forEach(item => pictures.push(item));
        const setfinal = this.state.isfinal || jsonData.isfinal
        this.setState(
            {
              myPictures: pictures,
              isfinal: setfinal,
              isloading: false,
            }
        );
      })
      .catch((error) => {
        // handle your errors here
        console.error(error)
      });
    }
  }

  render() {

    if (this.props.path === '') {
      return <StartPage key="0"/>
    }

    return (

        <div className={"imageBody"} onScroll={(e) => this.handleScroll(e)}>
          <div className={"imageGallery imagehover"}>
            <div className="row">
              {this.state.myPictures.map((item, index) => (

                  <div key={index} className={"col-lg-3 col-md-4 col-sm-6 col-xs-12"}>

                    <img alt="" className="card-img-top"
                         src={'data:image/png;base64, ' + item}/>

                  </div>

              ))}
              {this.state.isloading? <SpinnerDisplay/> :<React.Fragment/>}
            </div>
          </div>
        </div>
    )

  };
}

export default Body;
