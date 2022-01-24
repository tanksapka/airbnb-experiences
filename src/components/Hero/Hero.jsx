import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <img className="photo-grid" src="./photo-grid.png" alt="Experience photos" />
      <div className="hero-text">
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </section>
  );
}
