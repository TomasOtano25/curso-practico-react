import { Product } from "@/utils/types";
import { FC, useState } from "react";

import addToCart from "../assets/icons/bt_add_to_cart.svg";

import "../styles/ProductItem.scss";

type Props = {
  product: Product;
};

export const ProductItem: FC<Props> = ({ product }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddToCart = () => {
    const temp: Product[] = [...cart];
    temp.push(product);
    setCart(temp);
  };

  return (
    <div className="ProductItem">
      <img
        src={
          product.images[0] ||
          "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
        alt={product.title}
      />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure>
          <img onClick={handleAddToCart} src={addToCart} alt="" />
        </figure>
      </div>
    </div>
  );
};
