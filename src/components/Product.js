import React, {useRef, useEffect, useState} from 'react';
import { gsap } from "gsap";

// Import dependencies
import ImgWithFallback from '../actions/ImgWithFallback';
import Popup from './Popup';
import shoeWebp from '../../src/images/shoe.webp';
import shoePng from '../../src/images/shoe.png';

const Product = () => {
  const tl = useRef();
  const tl1 = useRef();

  // wait until DOM has been rendered
  const animateOne = () => {
    gsap.fromTo(tl.current,
      {opacity: 0, y: -100, delay: .5, ease: "Expo.easeOut"},
      {opacity: 1, y: 0, delay: .5, ease: "Expo.easeOut"});
  }

  const animateTwo = () => {
    gsap.fromTo(tl1.current,
      {opacity: 0, y: -100, delay: 1, ease: "Expo.easeOut"},
      {opacity: 1, y: 0, delay: 1, ease: "Expo.easeOut"});
  }

  const animateThree = () => {
    gsap.fromTo(tl1.current,
      {x: 0, y: 0, ease: "Expo.easeOut"},
      {x: "-55vw", y: 0, ease: "Expo.easeOut", rotate: -50, zIndex: 11, position: "absolute"});
  }

  useEffect(() => {
    animateOne();
    animateTwo();
  }, []);

  // Toggle active class
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = (e) => {
    e.preventDefault();

    if(!isOpen) {
      setIsOpen(true);
      animateThree();
    } else {
      setIsOpen(false);
    }
  }

  console.log(isOpen);

  return (
    <>
      <section className="product">
        <div className="product__details" ref={tl}>
          <h5>Men's Originals</h5>
          <h2>Nike Air Max</h2>
          <h4>$120.00</h4>
          <button className="button" onClick={(e) => openPopup(e)}>More Details</button>
        </div>
        <div ref={tl1} className="shoe">
          <ImgWithFallback
            src={shoeWebp}
            fallback={shoePng}
          />
        </div>
      </section>

      {isOpen && <Popup handleClose={openPopup}/>}
    </>
  );
}
  
export default Product;