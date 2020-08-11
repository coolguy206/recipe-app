import React from 'react';
import { Api } from './Api';
import { Section } from './Section';
// import { HomePage } from './HomePage';

export class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hpRecipes: [],
            pdpRecipe: {},
            showPdp: 'none',
            showHp: 'block'
        };

        this.click = this.click.bind(this);

    }

    componentDidMount() {

        let url1 = `https://api.spoonacular.com/recipes/random?apiKey=${Api}&number=9&tags=dessert`;
        // console.log(url1);

        fetch(url1)
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result);
                    this.setState({
                        hpRecipes: result.recipes,
                    });

                    console.log('header ajax');
                    console.log(this.state);

                    var id = result.recipes[0].id;
                    console.log(id);
                    //get pdp
                    let pdpUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${Api}`;

                    fetch(pdpUrl)
                        .then(res => res.json())
                        .then(
                            (result) => {

                            // console.log(result);
                            this.setState({
                                pdpRecipe: result,
                            });
                            console.log(this.state);
                        },

                        (error) => {
                            console.log(error);

                        }
                    );
                },

                (error) => {
                    console.log(error);
                }
            )

    }

    click() {
        document.getElementsByClassName('header')[0].classList.remove('pdp');
        console.log('from header click');
        // this.setState({
        //     showPdp: false,
        //     showHp: true
        // });
    }


    render() {

        return (
            <React.Fragment>
                <header className="header">
                    <h1><a href="#" onClick={ this.click }>Recipe Finder</a></h1>
                  <input type="text" placeholder="search" />
               </header>

               <Section hpRecipes={this.state.hpRecipes} pdpRecipe={this.state.pdpRecipe} showPdp={this.state.showPdp}   showHp={this.state.showHp} />
    
            </React.Fragment>
        );
    }

}