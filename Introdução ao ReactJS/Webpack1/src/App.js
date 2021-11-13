import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

export default class App extends React.Component {
  render() {
   return (
     <div className="App">
         <p>Digital Innovation One</p>  

        <div>WEBPACK 4</div>
        

     </div>
   )
  }
}
const item = document.getElementById('app');
ReactDOM.render(<App />, item);