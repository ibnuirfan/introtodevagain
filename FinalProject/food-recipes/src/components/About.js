import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Hero from '../Asset/Hero.jpg';
import styled from 'styled-components';

const Styles = styled.div`
.about{
    background: #fff59d;
    border-radius : 10px;
}

.text-center {
    color: #E0115F;
}

.hero {
    border-radius: 50%;
    opacity: 0.8;
}


`;
export const About = () => {
  return (
      <Styles>
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center m-2 ">
                <Image className="hero justify-content-end"  src={Hero} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-4 my-details rounded">
                Hi there! I am <strong>&nbsp;Ibnu Irfan</strong>
                <br />A passionate programmer, born and raised in Singapore. I am a Full Stack Web Developer learning React. This project "Recipe App" was to showcase what i have learnt. This app is design to help people with little to no knowledge to learn how to cook and this will be the by end product of what i have learnt so far. This project comprises of React components like react-router, react-router-dom,
                react-bootstrap and styled components.I aspire to be part of this growing industries and moving with the change for self-development. 
                <br />
                I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> <br />
            </Row>
        </Col>
            </Row>
        </Container>
     </div>
     </Styles>
  )
}
