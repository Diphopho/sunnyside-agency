import "./Socmed.css";
import { useRef } from "react";
import { useIntersection } from "react-use";
import gsap, { Bounce } from "gsap";

function Socmed(props) {
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  const bounce = (element) => {
    gsap.to(element, {
      duration: 1,
      y: 0,
      stagger: 0.1,
      ease: "bounce.out",
    });
  };

  const clearanim = (element) => {
    gsap.to(element, {
      duration: 0.4,
      y: -20,
      stagger: 0.1,
    });
  };

  intersection && intersection.intersectionRatio < 1
    ? clearanim(".anim")
    : bounce(".anim");

  return (
    <li ref={intersectionRef}>
      <a href={props.link}>
        <img
          src={props.icon}
          alt="facebook.com"
          className="socmed__icon anim"
        />
      </a>
    </li>
  );
}

export default Socmed;
