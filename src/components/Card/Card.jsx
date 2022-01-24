import "./Card.css";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        className="card-img"
        src={`./images/${props.coverImg}`}
        alt={props.coverImg.replace(".png", "").replace("_", " ")}
      />
      <section className="description">
        <div className="rating">
          <img src="./star.png" alt="Star icon" />
          <p>
            {props.stats.rating}{" "}
            <span>
              ({props.stats.reviewCount}) • {props.location}
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
