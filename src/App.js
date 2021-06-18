/*import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
*/
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Clock from './clock';
import Clock_2 from './clock';
import Timer from './timer';

const happy = <h2>I am happy</h2>;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <h1> My first React App</h1>
        </div>
        {happy}
        {/*4+4*/}
        <Clock_2 milsecs="1000" country="Italy" timezone="0" />
        <Clock_2 milsecs="3000" country="Russia" timezone="2" />
        <Clock_2 milsecs="5000" country="Cuba" timezone="-6" />
        <Timer milsecs="1000" country="Cuba" timezone="-6" />
      </React.Fragment>
    );
  }
}

export default App;
