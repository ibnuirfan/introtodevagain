import React, { Component } from 'react';
import {withRouter} from "react-router";

class RecipeCard extends Component {
    
    onClick = () =>{
        let recipeId = this.props.recipe.id
        
        this.props.history.push({
            pathname: '/full-recipe',
            state: { recipeId: recipeId }
          })

    }
    render() {
        const {image, title, id} = this.props.recipe
        // console.log(this.props.onlineId)
            return (
                <div className="card">
                    <div >
                        <img className="center" src={image} alt={title}/>
                        <div className= "container">
                            <h2>{title}</h2>
                        </div>
                        </div>
                        {this.showButtons(id)}
                    <button className="add-btn center" onClick={this.onClick}>View Recipe</button>
                </div>
        );
    }
}

export default withRouter(RecipeCard);
