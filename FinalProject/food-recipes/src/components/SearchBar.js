import React, { Component } from 'react'
import styled from 'styled-components';
import RecipeCard from './RecipeCard';
let API_KEY = 'ac15342574dd4e77b10b5a7c9250e4e0';

const Styles = styled.div`
 .input-group-append {
   margin-top: 10px;
 }

.text-capitalize {
  margin-top: 45px;
}
`;

export class SearchBar extends Component {
  state = {
    searchInput: "",
    data: []
  }

onChange = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }
 

onSubmit = (event) => {
    event.preventDefault()
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${this.state.searchInput}&number=12&apiKey=${API_KEY}`)
    .then(resp => resp.json())
    .then((resp) => {
        this.setState({
            searchInput: "",
            data: resp
        })
    })   
}
  render() {
    return (
      <Styles>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5 text-center">
            <h3 className="text-capitalize">What would you like to cook today?</h3>
            <form className="mt-3" onSubmit={this.onSubmit}>
              <label htmlFor="search" className="text-capitalize">
              </label>
              <div className="input-group">
                <input
                type="text"
                name="searchInput"
                className="form-control"
                placeholder="type your search here.."
                value={this.state.searchInput}
                onChange={this.onChange} 
                />
              </div>
              <div className="input-group-append d-flex justify-content-center">
                <button
                  type="submit"
                  className="input-group-text bg-warning text-white"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="random">
             <div className="card-container">{this.state.data.map(data => (<RecipeCard key={data.id} recipe={data}/>))}</div>
             </div>
      </Styles>
    )
  }
}

export default SearchBar


