import React, { Component } from 'react';
import {withRouter} from "react-router";
import {Container} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        background: #fff59d;

      &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        transform: scale(1.05);
      }
}
`;
class RecipeCard extends Component {
    
    onClick = () =>{
        let recipeId = this.props.recipe.id
        
        this.props.history.push({
            pathname: '/recipes',
            state: { recipeId: recipeId }
          })

    }
    render() {
        const {image, title} = this.props.recipe
        // console.log(this.props.onlineId)
            return (
                <Container>
                <Styles> 
                        <div className="card d-flex justify-content-center ">
                            <img className="card-img-top" src={image} alt={title}/>
                                <div className="card-body">
                                    <h6 className="card-title">{title}</h6>
                                <button className="add-btn center" onClick={this.onClick}>View Recipe</button>
                            </div>
                        </div>
                </Styles>
                </Container>
        );
    }
}

export default withRouter(RecipeCard);
