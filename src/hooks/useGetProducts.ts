import { useState, useEffect } from "react";

import axios from "axios";

import { Product } from "@/utils/types";

const fetchData = async (url: string) => {
  const response = await axios(url);
  return response.data;
};

export const useGetProducts = (api: string) => {
  const [products, setProducts] = useState<Product[]>([]);

  const url = `${api}?offset=0&limit=20`;

  const getProducts = async () => {
    const products = await fetchData(url);
    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return products;
};
