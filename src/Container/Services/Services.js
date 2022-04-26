import "./Services.css";
import { useMedia } from "react-use";
import Service from "../../Components/Service/Service";
import graphic_design from "../../assets/mobile/image-graphic-design.jpg";
import photography from "../../assets/mobile/image-photography.jpg";

function Services() {
  const large = useMedia("(min-width: 1024px)");

  return (
    <section className="services" id="Services">
      <Service
        data_aos={large ? "fade-up" : "fade-left"}
        id="graphic-design"
        class="graphic-design"
        background={graphic_design}
        title="graphic design"
        text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
      />
      <Service
        data_aos={large ? "fade-down" : "fade-right"}
        id="photography"
        class="photography"
        background={photography}
        title="photography"
        text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
      />
    </section>
  );
}

export default Services;
