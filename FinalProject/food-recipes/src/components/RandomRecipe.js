import React, { Component } from 'react';
import RecipeCard from './RecipeCard';

let API_KEY = 'ac15342574dd4e77b10b5a7c9250e4e0';


const gap = { marginTop : "100px" , textAlign: "center" };


class RandomRecipe extends Component {

    state ={
        random: []
    }

    onClick = () =>{
        fetch(`https://api.spoonacular.com/recipes/random?number=21&apiKey=${API_KEY}`)
        .then(resp => resp.json())
        .then((resp) => {
            this.setState({
                random: resp.recipes
            })
            // console.log(this.state.random)
         })
    }
            
        
    render() {
        // console.log(this.state.random)
        
        const getRecipes = this.state.random.map(recipe => 
            <RecipeCard key={recipe.id} recipe={recipe}/>)
        return (
                    <div style={gap}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-12">
                                     <button onClick={this.onClick} className= "get-recipes-btn" >Random Recipes</button>
                                        <div className="card-container">{getRecipes}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        );
    }
}

export default RandomRecipe;