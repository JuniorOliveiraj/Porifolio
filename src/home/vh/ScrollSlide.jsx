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

  const introAnimation = () => {
    const hero = document.querySelector(".hero");
    const slider = document.querySelector(".slider");
    const logo = document.querySelector("#logo");
    const hamburger = document.querySelector(".hamburger");
    const headline = document.querySelector(".headline");

    const tl1 = gsap.timeline();

    tl1
      .fromTo(
        hero,
        1.0,
        { height: "0%" },
        { height: "80%", ease: Power2.easeInOut }
      )
      .fromTo(
        hero,
        1.2,
        { width: "100%" },
        { width: "80%", ease: Power2.easeInOut }
      )
      .fromTo(
        slider,
        1.2,
        { x: "-100%" },
        { x: "0%", ease: Power2.easeOut },
        "-=1.2"
      )
      .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
      .fromTo(
        hamburger,
        0.5,
        { opacity: 0, y: -40 },
        { opacity: 1, y: 0 },
        "-=0.5"
      )
      .fromTo(
        headline,
        0.5,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 10, ease: Back.easeOut },
        "-=0.5"
      );
  };

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
      end: "+=4000",
      scrub: 1,
      pin: true,
      anticipatePin: 1
    });
  };

  useEffect(() => {
    introAnimation();
    slideAnimation();
  }, []);

  return (
    <div className="appa">
  


        <div
          className="slider"
          style={{
            background: "linear-gradient(to left, blue[900], blue[300])"
          }}
        ></div>
      

      <div className="canvas_tut">CANVAS</div>
      <div id="container">
        
        <SlideOne/>
        <div className="slide two">TWO</div>
        <div className="slide three">THREE</div>
        <div className="slide four">FOUR</div>
      </div>
    </div>
  );
}
