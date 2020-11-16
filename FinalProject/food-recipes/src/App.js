import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './components/Home';
import { Search } from './Search';
import { NoMatch } from './Nomatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/Navigationbar';
import { Categories } from './components/Categories';
import FooterPage from './components/Footer';


class App extends Component {
  render() {
  return (
    <React.Fragment>
      <Layout>
        <Router>
        <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={Search} />
            <Route exact path="/contact" component={Categories} />
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
