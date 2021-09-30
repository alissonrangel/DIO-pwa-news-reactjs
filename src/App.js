import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Post from './containers/Post';

function App() {
  return (
    <main className="App">
      <section>
        <Router>
          <Switch>
            <Route path="/:subject/:id" >
              <Post />
            </Route>
            <Route path="/" >
              <Home />
            </Route>            
          </Switch>
        </Router>
      </section>
    </main>
  );
}

export default App;
