import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import styled from 'styled-components';
import Cooking from '../Asset/Cooking.jpg';

const Styles = styled.div`
    .jumbotron {
        background-image: url(${Cooking});
        background-size: cover;
        background-repeat: no-repeat;
        border-radius : 10px;
        height: 30rem;
    }
    
    .img {
        background-size: cover
    }

    .text-center {
        color: #F5F5DC;
        text-transform: uppercase;
    }

    .vertical {
        padding-top: 130px;
    }
`;

export const Featured = () => (
        <Styles>
        <Jumbotron>
            <div className="vertical">
                <h1 className="text-center"><strong>Let's start cooking</strong></h1>
                <h5 className="text-center"><strong>surprise your love ones</strong></h5>
                </div>
        </Jumbotron>
        </Styles>    

)
