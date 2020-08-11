import React from 'react';
//import { Api } from './Api';
import { HomePage } from './HomePage';
// import { Header } from './Header';
// import { PdpPage } from './PdpPage';

export class Section extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showPdp: this.props.showPdp,
            showHp: this.props.showHp,
            pdpRecipe: this.props.pdpRecipe
        };
        // this.hover = this.hover.bind(this);
    }

    /*
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

                    console.log('section homepage ajax');
                    console.log(this.state);
                },
     
                (error) => {
                    console.log(error);
                }
            )
    }
    */

    // componentDidMount(){
    //     this.setState({
    //         showPdp: this.props.showPdp,
    //         showHp: this.props.showHp,
    //         pdpRecipe: this.props.pdpRecipe
    //     });
    // }

    componentWillUpdate(nextProps, nextState) {
        //you'll see the changing state value in here
        console.log(nextProps, nextState);
        console.log('Your prev auth state: ' + this.state.pdpRecipe);
        // console.log('Your next auth state: ' + nextState.auth);
    }


    render() {
        // console.log('from section');
        // console.log(this.state);

        // <Header hpRecipes={this.props.hpRecipes} showPdp={this.props.showPdp}   showHp={this.props.showHp} />

        

        console.log('from section pdpRecipe state');
        console.log(this.state);
        console.log(this.props);

        //  console.log('from section showHp props');
        // console.log(this.state.showHp);

// <HomePage  hpRecipes={this.props.hpRecipes} pdpRecipe={this.state.pdpRecipe}  showPdp={this.state.showPdp}   showHp={this.state.showHp} />

        return (
            <React.Fragment>

                <section className="main">
                   
                </section>

            </React.Fragment>
        );
    }
}