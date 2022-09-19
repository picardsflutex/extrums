import React, { Component } from "react";
import Slider from "react-slick";
import FIListItem from "./FIListItem";

export default class MISlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };
    return (
      <div className="my-ideas__slider">
        <Slider {...settings}>
          <FIListItem/>
          <FIListItem/>
          <FIListItem/>
          <FIListItem/>
          <FIListItem/>
          <FIListItem/>
          <FIListItem/>
          <FIListItem/>
          <FIListItem/>
        </Slider>
      </div>
    );
  }
}