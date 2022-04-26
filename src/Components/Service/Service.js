import "./Service.css";

function Service(props) {
  return (
    <div
      className={`service ${props.class}`}
      id={props.id}
      data-aos={props.data_aos}
    >
      <div className="text-wrapper">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Service;
