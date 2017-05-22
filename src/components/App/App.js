import React, { Component } from 'react';
import Homepage from '../Homepage/Homepage'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Link to='/'>Homepage</Link>
            <Route
              exact path="/"
              component={
                () => <Homepage msg={this.props.msg} />
              }
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
