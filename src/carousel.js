import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class Carousel extends Component {
  render() {
    return (
<div>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
         <div class="carousel-inner">
           <div class="carousel-item active">
               <img class="d-block w-100" src="image/01.jpg" alt="First slide"/>
           </div>
             <div class="carousel-item">
      <img class="d-block w-100" src="./02.jpg" alt="Second slide"/>
            </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./03.jpg" alt="Third slide"/>
    </div>
  </div>
</div>
</div>
    );
  }
}
export default Carousel;