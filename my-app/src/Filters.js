import React from 'react';

export class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.filter = this.filter.bind(this);
  }

  filter(e){
    console.log(`filter clicked`);

    var list = document.getElementsByClassName('search-list')[0].childNodes;
    // console.log(typeof list);
    list.forEach((val, i) => {

      var proteinInput = document.getElementsByClassName("protein")[0].value;
      var carbsInput = document.getElementsByClassName("carbs")[0].value;
      var fatsInput = document.getElementsByClassName("fats")[0].value;


      var protein = Number(val.attributes["data-protein"].value);
      var carbs = Number(val.attributes["data-carbs"].value);
      var fats = Number(val.attributes["data-fats"].value);
      var cookTime = Number(val.attributes["data-cook"].value);

      // if (cookTime > 60){
      //   val.style.display = "none";
      // }
      if(proteinInput !== "" && carbsInput !== "" && fatsInput !== ""){
        if(protein > proteinInput){
          val.style.display = "none";
        }
        if(carbs > carbsInput){
          val.style.display = "none";
        }
        if(fats > fatsInput){
          val.style.display = "none";
        }
      }
    })
  }

  render() {

    return (
      <div className ="filters">
        <h2>filters</h2>

        <h3>Nutrition</h3>
        <label>Max Protein</label>
        <input type="number" className="protein" placeholder="protien" /> %
        <label>Max Carbs</label>
        <input type="number" className="carbs" placeholder="carbs" /> %
        <label>Max Fats</label>
        <input type="number" className="fats" placeholder="fats" /> %

        <h3>cook time</h3>
        <label>less than 10min </label>
        <input className="cook-time" type="checkbox" value ="10" />
        <label>10min - 30min </label>
        <input className="cook-time" type="checkbox" value ="30" />
        <label>30min - 60min </label>
        <input className="cook-time" type="checkbox" value ="60" />
        <label>60min +</label>
        <input className="cook-time" type="checkbox" value ="61" />
        <button onClick={this.filter}>Apply</button>
      </div>
    )

  } //end of render
}
