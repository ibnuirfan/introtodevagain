import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './components/Home';
import { NoMatch } from './Nomatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/Navigationbar';
import FooterPage from './components/Footer';
import FullRecipe from './components/FullRecipe';
import SearchBar from './components/SearchBar';
import RandomRecipe from './components/RandomRecipe';

import {GlobalProvider, GlobalContext} from './context/GlobalState';


class App extends Component {
  render() {
  return (
    <React.Fragment>
      <Layout>
        <Router>
        <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/recipes" component={FullRecipe} />
            <Route exact path="/random" component={RandomRecipe} />
            <Route path="/search"  component={SearchBar}/>
            <Route component={NoMatch} />
          </Switch>
          <FooterPage />
        </Router>
      </Layout>
    </React.Fragment>
  );
 }
}

export default App;
