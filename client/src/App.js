import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';

import "./styles.scss";

function App() {
  const [colorList, setColorList] = useState([]);

  const removeColor = id => {
    setColorList(colorList.filter(color => color.id != id));

  }

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
         <PrivateRoute exact path='/bubblepage'component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
