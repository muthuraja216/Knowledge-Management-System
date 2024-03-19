import React from 'react';
import './Home.css'
import { Link, NavLink } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slide1 from './images/w3sch.png'
import slide2 from './images/solo.png'
import slide3 from './images/stack.png'
import slide4 from './images/udemi.png'

export const Home = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,

    cssEase: "linear"};
  return (
    <div>
      <div className='home-banner'>
        <div className='banner-slogan'>empower your knowledge </div>
        <div className='play-container'>
        <Link className='play-link' to="/Play">Test your iq</Link><br></br>
        </div>
      </div>
<div className='suggestion'>
  <div className='sugtitle'><p>
      "Top Study Websites: Your Ultimate Resource for Academic Success"</p></div>
</div>
     <div className='slideshow'>
    <div className='slidealign'>
    <div className='slide-cards'>
     <Slider {...settings}>
      <div className='slide s1'>
        <img src={slide1} height={300} width={400}></img>
      </div>
      <div className='slide s2'>
      <img src={slide2} height={300} width={400}></img>
      </div>
      <div className='slide s3'>
      <img src={slide3} height={300} width={400}></img>
      </div>
      <div className='slide s4'>
      <img src={slide4} height={300} width={400}></img>
      </div>

    </Slider>

     </div>
    </div>
     </div>
      
    </div>
  );
};