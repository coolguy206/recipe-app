import React from 'react';
import { HomePage } from './HomePage';
// import { Api } from './Api';

export class PdpPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            showPdp: this.props.showpdp,
            showHp: this.props.showhp,
        };
        // this.hover = this.hover.bind(this);
        this.click = this.click.bind(this);
    }


    // componentDidMount() {
    //     console.log('from pdpPage');
    //     console.log(this.state);

    //     var id = this.state.recipeId;
    //     let url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${Api}`;


    //     fetch(url)
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 console.log('from pdp after AJAX');
    //                 console.log(result);
    //                 this.setState({
    //                     // recipes: result.recipes
    //                 });
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


    click(e) {
        e.preventDefault();
        console.log('clicked');
        console.log(e.target.attributes[3].value);
    }


    render() {
        // console.log('from pdpPage');
        // console.log(this.props);

        console.log('from pdp hp props');
        // console.log(this.props.hpRecipes);

        const recipe = this.props.pdpRecipe;
        console.log('from pdp page');
        console.log(recipe);

        var id = recipe.id;
        const img = `https://spoonacular.com/recipeImages/${id}-556x370.jpg`;
        // const img = recipe.image;

        const isGluten = recipe.glutenFree;
        var gluten = '';
        if (isGluten === true) {
            gluten = 'Yes';
        } else {
            gluten = 'No';
        }

        const ingredients = recipe.extendedIngredients;
        let ingredientsLi = ingredients.map(function(val, i) {

            return (
                <li key={val.id}>
                    {val.original}
                </li>
            );
        });

        const instructions = recipe.analyzedInstructions[0].steps;
        let instructionsLi = instructions.map(function(val, i) {

            return (
                <li key={val.number}>
                    {val.step}
                </li>
            );
        });

        var winesLi;

        const wines = recipe.winePairing.pairedWines;
        if(wines !== undefined){
            winesLi = wines.map(function(val, i) {

                return (
                    <li key={i}>
                        {val}
                    </li>
                );
            });
        } else {
            winesLi = '';
        } 

        /*
        console.log('from pdp showPdp prop');
        console.log(this.state.showPdp);
        var pdp;
        if(this.state.showPdp){
            pdp =
            <div className="pdp">
                <div>
                    <img src={img} alt={recipe.title} title={recipe.title} />
                </div>

                <div>
                    <h2>{recipe.title}</h2>
                    <h3>Description</h3>
                    <p dangerouslySetInnerHTML={{__html: recipe.summary}} />
                    <p>Servings: {recipe.servings}</p>
                    <p>Cook time: {recipe.readyInMinutes} min</p>
                    <p>Gluten Free: {gluten}</p>
                    <h3>Ingredients</h3>
                    <ul className="ingredients">
                        {ingredientsLi}
                    </ul>
                    <h3>Instructions</h3>
                    <ol>
                        {instructionsLi}
                    </ol>
                    
                    <h3>Wine Pairing</h3>
                    <ul className="wines">
                        {winesLi}
                    </ul>
                    <p>{recipe.winePairing.pairingText}</p>
                </div>
           
                <div className="similar-recipes"></div>
            </div>;
        } else {
            pdp = '';
        }

        console.log('from pdp showHp prop');
        console.log(this.state.showHp);
        var hp;
        if(this.state.showHp){
            hp = <HomePage recipes={this.props.hpRecipes}  />
        } else {
            hp = '';
        }
        */
     

        return (
            <React.Fragment>
                <div className="pdp" style={{display: this.state.showPdp}}>
                    <div>
                        <img src={img} alt={recipe.title} title={recipe.title} />
                    </div>

                    <div>
                        <h2>{recipe.title}</h2>
                        <h3>Description</h3>
                        <p dangerouslySetInnerHTML={{__html: recipe.summary}} />
                        <p>Servings: {recipe.servings}</p>
                        <p>Cook time: {recipe.readyInMinutes} min</p>
                        <p>Gluten Free: {gluten}</p>
                        <h3>Ingredients</h3>
                        <ul className="ingredients">
                            {ingredientsLi}
                        </ul>
                        <h3>Instructions</h3>
                        <ol>
                            {instructionsLi}
                        </ol>
                    
                        <h3>Wine Pairing</h3>
                        <ul className="wines">
                            {winesLi}
                        </ul>
                        <p>{recipe.winePairing.pairingText}</p>
                    </div>
           
                    <div className="similar-recipes"></div>
                </div>
            </React.Fragment>
        );
    }

}