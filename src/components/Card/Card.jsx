import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img className="card-img" src={"./" + props.img} alt={props.img.replace(".png", "").replace("_", " ")} />
      <section className="description">
        <div className="rating">
          <img src="./star.png" alt="Star icon" />
          <p>
            {props.rating}{" "}
            <span>
              ({props.reviewCount}) • {props.country}
            </span>
          </p>
        </div>
        <p className="title">{props.title}</p>
        <p className="price">
          <span>From ${props.price}</span> / person
        </p>
      </section>
    </div>
  );
}
