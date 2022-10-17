import { FC } from "react";

import addCartIcon from "../assets/icons/bt_add_to_cart.svg";

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
  return (
    <div className="ProductItem">
      <img src={data.imageUrl} alt="" />
      <div className="product-info">
        <div>
          <p>${data.price}</p>
          <p>{data.name}</p>
        </div>
        <figure>
          <img src={addCartIcon} alt="" />
        </figure>
      </div>
    </div>
  );
};
