import React, { Component } from 'react';
import Demo from './demo';
import Carousel from './swipe.js';
import Swiper from './swiper.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Demo />
        <Carousel />
        <Swiper />
      </React.Fragment>
    );
  }
}

export default App;
