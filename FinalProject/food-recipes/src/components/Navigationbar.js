import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import styled from 'styled-components';
import Foodies from '../Asset/Foodies.png';

const Styles = styled.div`
    .navbar {
        background : rga(0,0,0,0.5);
        border-radius : 10px;
        margin-top: 5px;
        margin-bottom: -80px;
        padding:0 10px 0 0;
    }

    a, .navbar-brand, .navbar-nav .nav-link {
      color: 	#E0115F;
      &:hover {
        color: #808080;
      }
    }

    .nav-item {
      padding-top: 5px;
      padding-right: 5px;
      padding-left: 5px;
    }

    .navbar-toggler{
      background-color: #F5F5DC;
    }

    .navbar-collapse{
      margin bottom: 20px;
    }
`;

export const NavigationBar = () => (
    <Styles>
    <Navbar collapseOnSelect expand = "lg">
    <Navbar.Brand href="/">
          <img src={Foodies} width="150" alt="logo"/>
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav " />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto" activeKey="/">
          <Nav.Item>
            <Nav.Link>
              <Link to="/"><strong>Home</strong></Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/search"><strong>Search</strong></Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/random"><strong>Random</strong></Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)
