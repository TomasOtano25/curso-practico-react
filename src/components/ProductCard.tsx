import React, { FC, PropsWithChildren } from "react";

import addCartIcon from "../assets/icons/bt_add_to_cart.svg";

type Product = {
  name: string;
  imageUrl: string;
  price: string;
};

type Props = {
  data: Product;
};

export const ProductCard: FC<Props> = ({ data }) => {
  return (
    <div className="product-card">
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
