import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img5 from './images/img5.jpg';
import {Route,BrowserRouter as Router,Switch,Link}from "react-router-dom";

import './SlideShow.css';

const slideImages = [
  img1,img2,img3,img5
];
const props = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true
};

const Slideshowa = () => {
    return (
      <div className="slide-container">
        <Link to="/login">
        <h1>Login</h1>
        </Link>
        <Slide {...props}>
          <div className="each-slide">
            <div className="ss" style={{'backgroundImage': `url(${slideImages[0]})`}}>
               <label className="s1">
                <h2 className="description"> Contact Doctors </h2>
                <h2 className="description2"> Online! </h2>
               </label>
              <Link to="/signin">
              <button className="signin"> Sign in </button> 
              </Link>   
            </div>
          </div>
          <div className="each-slide">
            <div className="ss" style={{'backgroundImage': `url(${slideImages[1]})`}}>
                <label className="s2">
                <h2 className="description3"> Sign In To Do A Check-Up NOW </h2>
                </label>
                <Link to="/signin">
              <button className="signin"> Sign in </button> 
              </Link>
            </div>
          </div>
          <div className="each-slide">
            <div className="ss" style={{'backgroundImage': `url(${slideImages[2]})`}}>
                <label className="s3">
                    <h2 className="description4"> Get Your Prescription Once </h2>
                    <h2 className="description4"> You Complete Your Check-Up! </h2>

                </label>
              <Link to="/signin">
              <button className="signin"> Sign in </button> 
              </Link>
            </div>
          </div>
          <div className="each-slide">
            <div className="ss" style={{'backgroundImage': `url(${slideImages[3]})`}}>
                <label className="s4">
                    <h2 className="description4"> Experienced Doctors In Multiple </h2>
                    <h2 className="description4"> Fields Are Available For You! </h2>
                </label>
              <Link to="/signin">
              <button className="signin"> Sign in </button> 
              </Link>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshowa
//this slideshow coded by khalil 