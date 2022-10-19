import { Context, FC, useContext } from "react";

import "../styles/ProductItem.scss";
import addToCartIcon from "../assets/icons/bt_add_to_cart.svg";

import AppContext from "@/context/AppContext";
import { Product } from "@/utils/types";
import { StateContext } from "@/hooks/useInitialState";

interface Props {
  product: Product;
}

export const ProductItem: FC<Props> = ({ product }) => {
  const { addToCart } = useContext<StateContext>(AppContext);

  const handleClick = (item: Product) => {
    addToCart!(item);
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
          <img
            onClick={() => handleClick(product)}
            src={addToCartIcon}
            alt=""
          />
        </figure>
      </div>
    </div>
  );
};
