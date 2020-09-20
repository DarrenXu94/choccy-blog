import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Landing from "./pages/landing/Landing";
import Blog from "./pages/blog/Blog";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/blog/:id" component={Blog} />
      </Switch>
    </Router>
  );
}

export default App;
