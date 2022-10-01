import React, { useEffect, useRef } from "react";
import "./styles.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import moveScroll from '../assets/move.png'
export default function FallowScroll() {
  let linecontainer = useRef();
  const scrollEnd = 7500;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
    gsap.core.globals("MotionPathPlugin", MotionPathPlugin);

    let scrub = gsap
      .timeline({
        defaults: {},
        scrollTrigger: {
          trigger: linecontainer,
          start: "top top",
          end: `+=${scrollEnd}`,
          scrub: 0.5,
          markers: true,
          toggleActions: "play pause resume reset"
        }
      })
      .to(".coin", {
        ease: "none",

        motionPath: {
          path: ".theline",
          align: ".theline",
          alignOrigin: [0.5, 0.5]
        },
        rotation: "+=360",
        transformOrigin: "50% 50%"
      });
  }, []);

  return (
    <div className="containerScroll">
      <div
        ref={(el) => {
          linecontainer = el;
        }}
        className="linecontainer"
      >
        <svg
            style={{opacity:0.3}}
          className="pathMobile"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 637.64 4000"
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinecap="round"
          strokeMiterlimit="1"
        >
          <path
            className="theline"
            ref={(el) => {
              const theline = el;
            }}
            d="M413.55 0h1.92v122.75a116.64 116.64 0 0 1-113.84 116.62l-121.24 2.93A178.44 178.44 0 0 0 1.93 420.75v685.81a66.65 66.65 0 0 0 66.65 66.65h185.05A115.38 115.38 0 0 1 369 1288.59v365a163.17 163.17 0 0 1-163.17 163.17H1.93v517.28H180.4a134.34 134.34 0 0 1 134.33 133.36c.31 43.26 1.58 75.76 1.58 113.58 0 42 17.84 81.62 47.48 110.78s71.07 47.81 118.24 47.81l155.6.8v791.87l-93.4.81c-52.68 0-103.7 26.17-141.52 62.9s-62.39 84-62.38 125.85V4000h-1.93v-278.2c0-42.63 24.87-90.22 63-127.24s89.52-63.43 142.86-63.44l91.51-.79v-788L482 2741.5c-95.38 0-167.65-75.47-167.65-160.52 0-37.77-1.27-70.28-1.58-113.57A132.4 132.4 0 0 0 180.4 2336H0v-521.14h205.84a161.25 161.25 0 0 0 161.24-161.24v-365a113.45 113.45 0 0 0-113.45-113.45h-185A68.57 68.57 0 0 1 0 1106.56V420.75a180.38 180.38 0 0 1 180.38-180.38v1-1l121.23-2.93a114.71 114.71 0 0 0 112-114.69V0Z"
            fill="none"
            stroke="#ccc"
            strokeWidth="5"
          />
        </svg>

        <div>
          <img
            className="coin"
            ref={(el) => {
              const scrubcircle = el;
            }}
            src={moveScroll }
            alt=""
            transform="translate(-1129.746 1550.326)"
          />
        </div>
      </div>
    </div>
  );
}
