import "./Testimony.css";
import Card from "../../Components/Card/Card";
import emily from "../../assets/image-emily.jpg";
import thomas from "../../assets/image-thomas.jpg";
import jennie from "../../assets/image-jennie.jpg";

function Testimony() {
  return (
    <div className="testimony">
      <h2 className="testimony__title">Client Testimonials</h2>
      <Card
        avatar={emily}
        quote="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
        client="Emily R."
        job="Marketing director"
      />
      <Card
        avatar={thomas}
        quote="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
        client="thomas s."
        job="chief operating officer"
      />
      <Card
        avatar={jennie}
        quote="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
        client="jennie f."
        job="business owner"
      />
    </div>
  );
}

export default Testimony;
