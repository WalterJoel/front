import React from 'react';
import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link className='App-link' to='/'>
          Home
          </Link>
        </div>
      </Router>
    </div>
  );
}

export default App;
