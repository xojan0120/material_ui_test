import React, { Component } from 'react';
import './swiper.css'

class Swiper extends Component {
  render() {
		//var hoge = new Date();
    return (
      <React.Fragment>
			<div className="swiper-container">
				<div className="swiper-wrapper">
					<div className="swiper-slide">Slide 1</div>
					<div className="swiper-slide">Slide 2</div>
					<div className="swiper-slide">Slide 3</div>
					<div className="swiper-slide">Slide 4</div>
				</div>
			</div>
			{/* var mySwiper = new Swiper('.swiper-container', { }); */}
      </React.Fragment>
    );
  }
}

export default Swiper;
