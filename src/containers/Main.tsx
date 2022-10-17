import React from "react";
import { ProductCard } from "../components/ProductCard";

import "../styles/Card.scss";

const data = [
  {
    name: "Bike",
    imageUrl:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: "120,00",
  },
];

export const Main = () => {
  const items = [];
  for (let i = 0; i < 10; i++) {
    items.push(<ProductCard data={data[0]} key={i} />);
  }

  return (
    <section className="main-container">
      <div className="cards-container">{items}</div>
    </section>
  );
};
