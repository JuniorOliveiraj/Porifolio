import React, { useEffect } from "react";
import "./css/stylesScrollSlide.css";
import { ContainerHomeCenter } from "../../containr/container1";
import { gsap, Power2, Back } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SlideOne from "./Slides/slideOne";
import SlideTwo from "./Slides/slideTwo";
import SlideTree from "./Slides/slideTree";
import bg from '../../assets/66bf15b68e2ae9864bdb3f4ecf54c370.jpg'
export default function App() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "none", duration: 2 });



  const slideAnimation = () => {
    const container = document.querySelector("#container");
    const orange = document.querySelector(".two");
    const purple = document.querySelector(".three");
    const green = document.querySelector(".four");

    const tl2 = gsap.timeline();

    tl2
      .from(orange, { xPercent: -100, opacity: 0.5 })
      .from(purple, { xPercent: 100, opacity: 0.5 })
      .from(green, { yPercent: -100, opacity: 0.5 });

    ScrollTrigger.create({
      animation: tl2,
      trigger: container,
      markers: false,
      start: "top top",
      end: "+=2000",
      scrub: 1,
      pin: true,
      anticipatePin: 1
    });
  };

  useEffect(() => {
   
    slideAnimation();
  }, []);

  return (
    <div className="containerSlide">
  


        <div
          className="slider"
          style={{
            background: "linear-gradient(to left, blue[900], blue[300])"
          }}
        ></div>
      

      <div className="canvas_tut">CANVAS</div>
      <div id="container">
        
        <SlideOne className="slide two"/>
        <div className="slide two">TWO</div>
        <div className="slide three">THREE</div>
   
      </div>
    </div>
  );
}
