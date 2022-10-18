import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductItem } from "../components/ProductItem";

import "../styles/ProductList.scss";

const API = "https://api.escuelajs.co/api/v1/products";

const fetchData = async () => {
  const response = await axios(`${API}?offset=0&limit=20`);
  return response.data;
};

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const products = await fetchData();
      setProducts(products);
    }
    getProducts();
  }, []);

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product, i) => {
          return <ProductItem data={product} key={i} />;
        })}
      </div>
    </section>
  );
};
