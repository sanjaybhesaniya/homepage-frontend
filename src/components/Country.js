import React, {Component} from 'react';
import $ from 'jquery';
import {GoTriangleDown} from 'react-icons/go';
import {GoTriangleRight} from 'react-icons/go';

class Country extends Component {

  constructor() {
    super();

    this.state = {
      myTravels: [],
    }

  };

  componentDidMount() {

    const travels = this.props.travels.map(item => {
          return item;
        }
    )

    this.setState(
        {
          myTravels: travels
        }
    );
  }

  render() {

    let countryname = this.props.country.replace(/\s/g, '');
    let divname = "collapse" + countryname;
    let plusname = "pluscollapse" + countryname;
    let minusname = "minuscollapse" + countryname;

    var myCollapsible = document.getElementById(divname)
    myCollapsible && myCollapsible.addEventListener('hidden.bs.collapse', function (e) {
      $('#plus' + e.currentTarget.id).removeClass("d-none");
      $('#minus' + e.currentTarget.id).addClass("d-none");
      e.stopPropagation();
    });
    myCollapsible && myCollapsible.addEventListener('shown.bs.collapse', function (e) {
      $('#minus' + e.currentTarget.id).removeClass("d-none");
      $('#plus' + e.currentTarget.id).addClass("d-none");
      e.stopPropagation();
    });

    return (
        <>
              <a className="text-white border-0" data-bs-toggle="collapse" href={"#" + divname}
                 role="button" aria-expanded="false" aria-controls={divname}>
                <h5 className="px-3 py-2"><GoTriangleDown id={minusname} className="d-none"/>
                  <GoTriangleRight id={plusname}/>
                  {this.props.country}</h5>
              </a>
              <div className="collapse px-4" id={divname} aria-expanded="false">

                {this.state.myTravels.map((item, index) => (
                    <p key={index}>
                      <button type="button"
                              className="btn btn-warning btn-sm" href='#'
                              onClick={() => this.props.changeBody(item.path, 1,
                                  6)}>{item.travel}</button>
                    </p>))
                }
              </div>
        </>
    )

  };
}

export default Country;
