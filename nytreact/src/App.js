import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';



const App = () =>
  <Router>
    <div>
      <Route path="/" compenent={Home} />
    </div>

  </Router>

export default App;