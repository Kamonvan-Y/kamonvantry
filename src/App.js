import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from'./Navbar';
import Carousel from './carousel.js';

var stylesection ={
  width: "100%",
  height: "700",
}

class App extends Component {
  render() {
    return (
      <div class="bg">
       <Nav/>
       <Carousel/>
          
          



        
      </div>
    );
  }
}


export default App;
