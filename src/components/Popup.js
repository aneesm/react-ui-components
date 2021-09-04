import React, {useRef, useEffect} from 'react'
import NumericInput from "react-enhanced-numeric-input";
import Select from 'react-select'
import gsap from 'gsap';

import {animateThreeReverse} from './Product';

import "react-enhanced-numeric-input/dist/react-enhanced-numeric-input.css";

const Popup = (props) => {
  // GSAP animation
  const product = useRef();
  const productContent = useRef();

  // Select
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  // wait until DOM has been rendered
  const animateShoeWrapper = () => {
    gsap.fromTo(product.current,
      {opacity: 0, width: 0, delay: .2, ease: "Expo.easeOut"},
      {opacity: 1, width: "40%", delay: .2, ease: "Expo.easeOut"});
  }

  const animateContentWrapper = () => {
    gsap.fromTo(productContent.current,
      {opacity: 0, x: -150, delay: .6, ease: "Expo.easeOut"},
      {opacity: 1, x: 0, delay: .6, ease: "Expo.eeaseOut"});
  }

  const animReverse = (e) => {
    gsap.fromTo(productContent.current,
      {opacity: 1, x: 0, delay: .75, ease: "Expo.easeOut"},
      {opacity: 0, x: -150, delay: .75, ease: "Expo.easeOut"});
    gsap.fromTo(product.current,
      {opacity: 1, width: "40%", delay: 1, ease: "Expo.easeOut"},
      {opacity: 0, width: 0, delay: 1, ease: "Expo.easeOut"});
    gsap.fromTo('.shoe',
      {x: "-55vw", y: 0, ease: "Expo.easeOut", rotate: -50, delay: 1.3, zIndex: 11, position: "absolute"},
      {x: 0, y: 0, rotate: 0, zIndex: -1, delay: 1.3, ease: "Expo.easeOut"});
    setTimeout(() => {
      props.handleClose(e);
    }, 2000);
  }

  useEffect(() => {
    animateShoeWrapper();
    animateContentWrapper();
  });

  return (
    <>
      <section className="popup">
        <div className="popup__product" ref={product}>
        </div>

        <div className="popup__content" ref={productContent}>
          <button className="button button__close" onClick={(e) => {animReverse(e);}}></button>
          <div className="popup__rating">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>

          <h2>Nike Air Zoom Max 2021</h2>
          <h4><span>Style Number</span> AH5402-567</h4>
          <h1>$120.00</h1>
          <p>Id occaecat nostrud exercitation labore amet veniam. Nulla voluptate in incididunt ut cupidatat nulla ullamco. Consectetur quis proident quis nisi eiusmod mollit do ut irure aute elit. Occaecat consequat labore esse aliquip dolor est minim dolore magna non enim aliquip consequat.</p>

          <div className="popup__colour">
            <ul>
              <li className="title-small">
                Colour
              </li>
              <li>
                <label htmlFor="f-option" className="l-radio">
                  <input type="radio" id="f-option" name="colour" tabIndex="1" />
                  <span>Red</span>
                </label>
                <label htmlFor="s-option" className="l-radio">
                  <input type="radio" id="s-option" name="colour" tabIndex="2" />
                  <span>Black</span>
                </label>
                  <label htmlFor="t-option" className="l-radio">
                  <input type="radio" id="t-option" name="colour" tabIndex="3" />
                  <span>Green</span>
                </label>
              </li>
            </ul>
          </div>

          <div className="popup__size">
            <ul>
              <li className="title-small">
                Size
              </li>
              <li className="input-area">
                <Select options={options} />
              </li>
            </ul>
          </div>

          <div className="popup__quantity">
            <ul>
              <li className="title-small">
                Quantity
              </li>
              <li>
                <NumericInput maxLength={5} value={1} className="input-number" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Popup;