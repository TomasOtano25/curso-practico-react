import { FC, useEffect, useState } from "react";

import addToCart from "../assets/icons/bt_add_to_cart.svg";

import "../styles/ProductItem.scss";

type Product = {
  title: string;
  images: string[];
  price: number;
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
      <img
        src={
          data.images[0] ||
          "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
        alt=""
      />
      <div className="product-info">
        <div>
          <p>${data.price}</p>
          <p>{data.title}</p>
        </div>
        <figure>
          <img onClick={handleAddToCart} src={addToCart} alt="" />
        </figure>
      </div>
    </div>
  );
};
