import "./Project.css";
import coneMobile from "../../assets/mobile/image-gallery-cone.jpg";
import coneDesktop from "../../assets/desktop/image-gallery-cone.jpg";
import milkbottlesMobile from "../../assets/mobile/image-gallery-milkbottles.jpg";
import milkbottlesDesktop from "../../assets/desktop/image-gallery-milkbottles.jpg";
import orangeMobile from "../../assets/mobile/image-gallery-orange.jpg";
import orangeDesktop from "../../assets/desktop/image-gallery-orange.jpg";
import sugar_cubesMobile from "../../assets/mobile/image-gallery-sugar-cubes.jpg";
import sugar_cubesDesktop from "../../assets/desktop/image-gallery-sugarcubes.jpg";
import { useMedia } from "react-use";

function Project() {
  const large = useMedia("(min-width: 1024px)");

  return (
    <div className="project" id="Projects">
      <picture data-aos={large ? "fade-down" : "fade-right"}>
        <source srcSet={milkbottlesDesktop} media="(min-width:800px)" />
        <img src={milkbottlesMobile} alt="milk bottles" />
      </picture>
      <picture data-aos={large ? "fade-up" : "fade-left"}>
        <source srcSet={orangeDesktop} media="(min-width:800px)" />
        <img src={orangeMobile} alt="orange" />
      </picture>
      <picture
        data-aos={large ? "fade-down" : "fade-right"}
        data-aos-delay={large ? "0" : "200"}
      >
        <source srcSet={coneDesktop} media="(min-width:800px)" />
        <img src={coneMobile} alt="cone" />
      </picture>
      <picture
        data-aos={large ? "fade-up" : "fade-left"}
        data-aos-delay={large ? "0" : "200"}
      >
        <source srcSet={sugar_cubesDesktop} media="(min-width:800px)" />
        <img src={sugar_cubesMobile} alt="Sugar cube" />
      </picture>
      {/* <img src={milkbottles} alt="" />
      <img src={orange} alt="" />
      <img src={cone} alt="" />
      <img src={sugar_cubes} alt="" /> */}
    </div>
  );
}

export default Project;
