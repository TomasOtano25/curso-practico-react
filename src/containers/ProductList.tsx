import React from "react";
import { ProductItem } from "../components/ProductItem";

import "../styles/ProductList.scss";

const data = [
  {
    name: "Bike",
    imageUrl:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: "120,00",
  },
];

export const ProductList = () => {
  const items = [];
  for (let i = 0; i < 10; i++) {
    items.push(<ProductItem data={data[0]} key={i} />);
  }

  return (
    <section className="main-container">
      <div className="ProductList">{items}</div>
    </section>
  );
};
