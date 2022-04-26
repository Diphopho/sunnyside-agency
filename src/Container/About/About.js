import "./About.css";
// import { useRef } from "react";
// import { useIntersection } from "react-use";
// import gsap from "gsap";
import Article from "../../Components/Article/Article";
import eggMobile from "../../assets/mobile/image-transform.jpg";
import egg from "../../assets/desktop/image-transform.jpg";
import standout from "../../assets/mobile/image-stand-out.jpg";
import standoutMobile from "../../assets/desktop/image-stand-out.jpg";

function About() {
  // const sectRef = useRef(null);
  // const intersection = useIntersection(sectRef, {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 0.1,
  // });

  // const fadeIn = (element) => {
  //   gsap.to(element, {
  //     duration: 1,
  //     ease: "power4.out",
  //     opacity: 1,
  //     x: 0,
  //     stagger: {
  //       amount: 0.3,
  //     },
  //   });
  // };

  // const fadeOut = (element) => {
  //   console.log(element);
  //   gsap.to(element, {
  //     duration: 1,
  //     ease: "power4.out",
  //     opacity: 0,
  //     x: -100,
  //     stagger: {
  //       amount: 0.3,
  //     },
  //   });
  // };

  // intersection && intersection.intersectionRatio < 0.1
  //   ? fadeOut(".fadeIn")
  //   : fadeIn(".fadeIn");

  return (
    <div id="About" className="about">
      <Article
        imgMobile={eggMobile}
        imgDesktop={egg}
        title="Transform your brand"
        text="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
        link="transform"
        linkClass="yellow"
        alt="Egg"
      />
      <Article
        imgMobile={standoutMobile}
        imgDesktop={standout}
        title="Stand out to the right audience"
        text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
        link="standout"
        linkClass="pink"
        alt="Glass"
      />
    </div>
  );
}

export default About;
