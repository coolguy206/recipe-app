import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWineBottle } from '@fortawesome/free-solid-svg-icons';

export class Wines extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    var wines = this.props.winesList;
    var wineText = this.props.wineText;
    // console.log(`from wines.js`);
    // console.log(wines);
    // console.log(wines.length);

    if(wines !== undefined && wines.length > 0) {
      var winesLi = wines.map(function(val, i) {
        // var url = `/search/${val}`;
        return (
          <li key={i}>
            {val}
            </li>
          );
        });

      return (
        <React.Fragment>
          <h3><FontAwesomeIcon icon={faWineBottle} size="lg"/> Wine Pairing</h3>
          <ul className="wines">
            {winesLi}
          </ul>
          <p>{wineText}</p>
        </React.Fragment>
      );

    } else {
      // console.log(`no wines`);
      return null;
    } //end of wines.length > 0


  } //end of render
}
