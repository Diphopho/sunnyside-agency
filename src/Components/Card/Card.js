import "./Card.css";

function Card(props) {
  return (
    <div className="card" data-aos="fade">
      <img className="avatar" src={props.avatar} alt="avatar" />
      <q>{props.quote}</q>
      <h4>{props.client}</h4>
      <p className="job">{props.job}</p>
    </div>
  );
}

export default Card;
