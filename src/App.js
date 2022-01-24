import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import "./App.css";
import dataArray from "./data";

export default function App() {
  const cards = dataArray.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}
        // img={`./images/${item.coverImg}`}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
      />
    );
  });

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="card-list">{cards}</section>
    </div>
  );
}
