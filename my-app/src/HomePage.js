import React from 'react';
import { Api } from './Api';
import { PdpPage } from './PdpPage';


export class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pdpRecipe: this.props.pdprecipe,
            showPdp: this.props.showpdp,
            showHp: this.props.showhp,
        };
        // this.hover = this.hover.bind(this);
        this.click = this.click.bind(this);
    }

    // componentDidMount() {
    //     let url = `https://api.spoonacular.com/recipes/random?apiKey=${Api}&number=9&tags=dessert`;

    //     fetch(url)
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 console.log('from homePage after ajax');
    //                 // console.log(this.state);

    //                 this.setState({
    //                     recipes: result.recipes,
    //                     recipe: result.recipes[0].id
    //                 });

    //                 console.log(this.state);
    //             },
    //             // Note: it's important to handle errors here
    //             // instead of a catch() block so that we don't swallow
    //             // exceptions from actual bugs in components.
    //             (error) => {
    //                 console.log(error);
    //                 // this.setState({
    //                 //     isLoaded: true,
    //                 //     error
    //                 // });
    //             }
    //         )
    // }

    hover(elem) {
        // const elem = document.getElementById(id);
        // console.log(elem);
        // var overlay = elem.children[0];

        // if (overlay.classList.length === 1) {
        //     overlay.classList.add('hide');
        // }
        // else if (overlay.classList.length === 2) {
        //     overlay.classList.remove('hide');
        // }
        console.log('hovered');
        console.log(elem);
    }

    click(e) {
        e.preventDefault();
        console.log('clicked from homePage');
        // console.log(e);
        // console.log(e.currentTarget);
        var id = e.target.attributes[3].value
        console.log(id);

        var header = document.getElementsByClassName("header")[0];

        // this.setState({
        //     recipe: id,
        //     display: 'block'
        // });
        // console.log(this.state);

        // e.currentTarget.setAttribute('recipeId', id);


        let url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${Api}`;

        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {

                    // console.log(result);
                    this.setState({
                        showPdp: 'block',
                        pdpRecipe: result,
                        showHp: 'none'
                    });

                    console.log('from homepage click after AJAX');
                    console.log(this.state);

                    header.classList.add('pdp');
                    window.scrollTo(0, 0);
                },

                (error) => {
                    console.log(error);

                }
            );

    }


    render() {

        // console.log(this.state);
        // console.log('from home page render');
        // console.log(this.props);

        let recipes = this.props.hprecipes;
        let li = recipes.map(function(val, i) {
            var id = val.id;
            var title = val.title;
            var href = "#/recipe/" + id;
            var imgSrc = "https://spoonacular.com/recipeImages/" + id + "-636x393.jpg";

            return (
                <li key={id} id={id}>
                    
                    <a href={href} data-id={id} className="recipe">
                        <img src={imgSrc} alt={title} title={title} data-id={id} />
                        <div>
                            <h2>{val.title}</h2>
                            <p>Cook time: {val.readyInMinutes} min</p>
                            <p>Servings: {val.servings}</p>
                        </div>
                    </a>
                </li>
            );
        });

        let homepage;
        if (this.state.showHp) {
            homepage = <div className="homepage">
                    <ul className="hp" onClick={ this.click }>
                        {li}
                    </ul>
                </div>
        } else {
            homepage = '';
        }


        let pdp;
        if (this.state.showPdp) {
            pdp = <PdpPage pdpRecipe={this.state.pdpRecipe} hpRecipes={this.props.hpRecipes} showPdp={this.state.showPdp}   showHp={this.state.showHp} />;
        } else {
            pdp = '';
        }

        // <PdpPage pdpRecipe={this.state.pdpRecipe} hpRecipes={this.props.hpRecipes} showPdp={this.state.showPdp}   showHp={this.state.showHp} />

        return (
            <React.Fragment>

                <div className="homepage" style={{display: this.state.showhp}}>
                    <ul className="hp" onClick={ this.click }>
                        {li}
                    </ul>
                </div>

               
            
            </React.Fragment>
        );
    }

}