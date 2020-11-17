import React, { Component } from 'react';
import RecipeList from '../components/RecipeList';
import SearchBar from '../components/SearchBar';
import { recipeData } from '../data/tempList';


export class Recipes extends Component {
    constructor(props){
        super(props)
    }
state = {
    recipes: recipeData,
    search:''
}
handleChange = (e) => {
    this.setState({
        search: e.target.value
    });
};
handleSubmit = (e) => {
    e.preventDefault()
}

    render() {
        return (
            <>
                <SearchBar search={this.state.search} 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit} />
                <RecipeList recipes={this.state.recipes} />
            </>
        )
    }
}

export default Recipes
