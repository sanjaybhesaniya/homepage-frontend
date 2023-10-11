import React, {Component} from 'react';
import Country from './Country';
import $ from 'jquery';
import {GoTriangleDown} from 'react-icons/go';
import {GoTriangleRight} from 'react-icons/go';

class Continent extends Component {

  constructor() {
    super();

    this.state = {
      reload: false,
      myCountries: []
    }

  };

  changeBody = (path, page, count) => {
    this.props.changeBody(path, page, count);
  };

  componentDidMount() {

    const countries = this.props.countries.map(item => {
          return item;
        }
    )

    this.setState(
        {
          myCountries: countries
        }
    );
  };

  render() {

    let continentname = this.props.continent.replace(/\s/g, '');
    let divname = "collapse" + continentname;
    let plusname = "pluscollapse" + continentname;
    let minusname = "minuscollapse" + continentname;

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
                <h3><GoTriangleDown id={minusname} className="d-none"/>
                  <GoTriangleRight id={plusname}/>
                  {this.props.continent}</h3>
              </a>
              <div className="collapse" id={divname} aria-expanded="false">
                {this.state.myCountries.map((item, index) => (
                    <Country
                        key={index}
                        country={item.country}
                        travels={item.travels}
                        changeBody={this.changeBody}
                    />
                ))
                }
              </div>
              <br/>
            </>
    )

  };
}

export default Continent;
