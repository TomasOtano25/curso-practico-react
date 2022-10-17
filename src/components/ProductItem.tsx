import { FC, useEffect, useState } from "react";

import addToCart from "../assets/icons/bt_add_to_cart.svg";

import "../styles/ProductItem.scss";

type Product = {
  name: string;
  imageUrl: string;
  price: string;
};

type Props = {
  data: Product;
};

export const ProductItem: FC<Props> = ({ data }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddToCart = () => {
    const temp: Product[] = [...cart];
    temp.push(data);
    setCart(temp);
  };

  return (
    <div className="ProductItem">
      <img src={data.imageUrl} alt="" />
      <div className="product-info">
        <div>
          <p>${data.price}</p>
          <p>{data.name}</p>
        </div>
        <figure>
          <img onClick={handleAddToCart} src={addToCart} alt="" />
        </figure>
      </div>
    </div>
  );
};
