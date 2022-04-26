import "./Article.css";

const Article = (props) => {
  return (
    <section className="article" id={props.link}>
      <picture data-aos="fade-right">
        <source srcSet={props.imgDesktop} media="(min-width:800px)" />
        <img src={props.imgMobile} alt={props.alt} />
      </picture>
      <div className="text-wrapper" data-aos="fade-left">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <a href={"#" + props.link} className={props.linkClass}>
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Article;
